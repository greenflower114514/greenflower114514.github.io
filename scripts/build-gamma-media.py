"""Rebuild the original Gamma lesson media (Pillow + ffmpeg).

Run from any directory. --font can point to an installed Chinese TrueType font.
No downloaded imagery or third-party video is used.
"""
import argparse
import math
from pathlib import Path
import shutil
import subprocess
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets/study/gamma'
W, H, FPS, DURATION = 1280, 720, 12, 60
BG, PANEL, INK, MUTED, GREEN, GOLD = '#141719', '#1c2325', '#edf0eb', '#a4adaa', '#b7d9c4', '#e3bb89'


def decode(c):
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def encode(v):
    return 12.92 * v if v <= 0.0031308 else 1.055 * v ** (1 / 2.4) - 0.055


def curve_svg():
    pts = ' '.join(f'{80 + 600 * i / 200:.2f},{370 - 270 * decode(i / 200):.2f}' for i in range(201))
    grid = ''.join(f'<path d="M80 {370-270*t}H680 M{80+600*t} 100V370"/><text x="65" y="{376-270*t}" text-anchor="end">{t:g}</text><text x="{80+600*t}" y="402" text-anchor="middle">{t:g}</text>' for t in [0, .25, .5, .75, 1])
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="760" height="470" viewBox="0 0 760 470" role="img" aria-labelledby="title desc">
<title id="title">sRGB 数字与线性光强</title><desc id="desc">sRGB 0.5 对应线性 0.214；sRGB 0.735 对应线性 0.5。</desc>
<rect width="760" height="470" rx="10" fill="{BG}"/>
<g font-family="Microsoft YaHei, sans-serif" font-size="17" fill="{MUTED}">
<text x="80" y="42" fill="{INK}" font-size="21">纵轴：线性光强 L（白色 = 1）</text>
<g stroke="#ffffff16" stroke-width="1">{grid}</g>
<path d="M80 100V370H680" fill="none" stroke="{MUTED}"/>
<path d="M80 370L680 100" stroke="{GOLD}" stroke-width="2" stroke-dasharray="7 7"/>
<polyline points="{pts}" stroke="{GREEN}" stroke-width="4" fill="none"/>
<path d="M380 370V312.21H80 M521.21 370V235H80" stroke="{GREEN}" stroke-dasharray="4 5" fill="none"/>
<circle cx="380" cy="312.21" r="6" fill="{GREEN}"/><circle cx="521.21" cy="235" r="6" fill="{GREEN}"/>
<text x="385" y="343" fill="{INK}">0.500 → 0.214</text><text x="530" y="270" fill="{INK}">0.735 → 0.500</text>
<text x="100" y="89" fill="{GOLD}">虚线：假设数字等于光强（y = x）</text>
<text x="100" y="125" fill="{GREEN}">实线：实际 sRGB 解码</text>
<text x="380" y="446" text-anchor="middle" fill="{INK}" font-size="20">横轴：存储 / 显示的 sRGB 数值 C</text></g></svg>'''
    (OUT / 'srgb-curve.svg').write_text(svg, encoding='utf-8')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--font', default='C:/Windows/Fonts/msyh.ttc')
    args = parser.parse_args()
    ffmpeg = shutil.which('ffmpeg')
    if not ffmpeg:
        raise SystemExit('ffmpeg is required')
    OUT.mkdir(parents=True, exist_ok=True)
    fonts = {n: ImageFont.truetype(args.font, n) for n in [20, 24, 28, 30, 32, 36, 42, 46, 64, 80]}

    def txt(draw, x, y, text, size=30, color=INK):
        draw.text((x, y), text, font=fonts[size], fill=color)

    def card(draw, box, border=GREEN):
        draw.rounded_rectangle(box, radius=16, fill=PANEL, outline=border, width=2)

    titles = ['0.5 灰，不等于一半光强', '目标相同，显示前要先编码', '颜色贴图：先把编码还原', '光照在线性空间里计算', 'Unity 中，认准两个设置', '记住颜色的这趟往返']
    captions = [('sRGB 存的是非线性编码，Linear 数值才与光强成比例。', '这里把白色的光强定为 1；不等同于主观感知亮度。'),
                ('左边直接把目标数值当作 sRGB；右边先进行 sRGB 编码。', '目标为 50% 时，应输出约 0.735，显示后才对应一半光强。'),
                ('Linear 工作流中，sRGB 颜色贴图在采样时被解码。', '0.500 变为约 0.214，然后交给 Shader。'),
                ('假设光照系数为 0.5：线性光强从 0.214 减半为 0.107。', '再编码为约 0.361 输出。这里省略曝光与色调映射。'),
                ('Color Space 选 Linear；贴图按颜色或数据决定 sRGB 设置。', '灰色 Albedo 也是颜色；灰色 Mask 则保存数值。'),
                ('颜色先解码，光照在线性空间算，输出时再编码。', 'Unity 已自动处理的转换，不要再手动重复。')]

    def frame(t):
        im = Image.new('RGB', (W, H), BG)
        d = ImageDraw.Draw(im)
        scene = min(5, int(t // 10)); p = (t % 10) / 10
        txt(d, 60, 35, '电子蜗居 / 学习手记     UNITY · GAMMA', 20, GREEN)
        txt(d, 60, 86, titles[scene], 46)
        txt(d, 1130, 40, f'0{scene+1} / 06', 20, MUTED)
        if scene == 0:
            for x, c, label, number, sub in [(60, 128, 'sRGB 数字 0.500', '21.4%', '对应的线性光强'), (670, 188, '线性光强 0.500', '50.0%', '对应 sRGB ≈ 0.735')]:
                card(d, (x, 190, x+550, 525))
                d.rounded_rectangle((x+25, 220, x+200, 490), 8, fill=(c,c,c))
                txt(d, x+225, 225, label, 28, GREEN)
                txt(d, x+225, 300, number, 64)
                txt(d, x+225, 417, sub, 24, MUTED)
        elif scene == 1:
            # Move through several target intensities, then hold at 50%.
            v = .15 + .65 * (1-math.cos(p/.7*2*math.pi))/2 if p < .7 else .5
            txt(d, 60, 170, f'目标线性光强：{v*100:.0f}%', 32, GREEN)
            for x, c, label, sub in [(60, v, '直接当 sRGB 显示', f'光强 ≈ {decode(v)*100:.1f}%'), (670, encode(v), '先编码，再显示', f'光强 ≈ {v*100:.1f}%')]:
                val = round(c*255)
                d.rounded_rectangle((x, 230, x+550, 410), 12, fill=(val,val,val))
                txt(d, x, 430, label, 28)
                txt(d, x, 478, f'sRGB {c:.3f}   →   {sub}', 28, MUTED)
        elif scene == 2:
            card(d, (60, 190, 610, 525))
            txt(d, 90, 214, '采样时去掉颜色编码', 28, GREEN)
            txt(d, 90, 287, '0.500 → 0.214', 46)
            txt(d, 90, 382, 'sRGB         Linear', 30, MUTED)
            txt(d, 90, 460, '曲线不是一条直线', 24, MUTED)
            x0, y0, gw, gh = 710, 500, 460, 290
            d.line((x0,y0-gh,x0,y0,x0+gw,y0), fill=MUTED, width=2)
            points = [(x0+gw*i/200,y0-gh*decode(i/200)) for i in range(201)]
            d.line(points, fill=GREEN, width=4)
            c = min(.5, p*.9)
            x,y = x0+gw*c, y0-gh*decode(c)
            d.line((x,y0,x,y,x0,y), fill=GOLD, width=2)
            d.ellipse((x-9,y-9,x+9,y+9), fill=GOLD)
            txt(d, 710, 170, '纵轴：线性光强', 24, MUTED)
            txt(d, 900, 515, '横轴：sRGB', 24, MUTED)
        elif scene == 3:
            for i, (label, value, sub) in enumerate([('解码后', '0.214', '线性颜色'), ('乘光照 0.5', '0.107', '线性结果'), ('输出编码', '0.361', 'sRGB 数字')]):
                x=60+i*395
                card(d,(x,225,x+370,500), GREEN if i <= int(p*4) else '#3b4444')
                txt(d,x+25,250,label,30,GREEN)
                txt(d,x+25,315,value,64)
                txt(d,x+25,430,sub,28,MUTED)
        elif scene == 4:
            txt(d, 60, 171, 'Project Settings → Player → Other Settings', 28, MUTED)
            card(d, (60, 225, 1220, 295)); txt(d, 85, 238, 'Color Space', 30); txt(d, 930, 238, 'Linear', 32, GREEN)
            for i,(a,b) in enumerate([('sRGB 颜色图 / Albedo', 'sRGB 开启'), ('Mask / AO / VAT 等数据', 'sRGB 关闭'), ('法线贴图', 'Normal map')]):
                y=318+i*70
                txt(d,85,y,a,30)
                txt(d,930,y,b,30,GREEN if p > i*.2 else MUTED)
        else:
            for i,(label,sub) in enumerate([('解码','sRGB → Linear'),('计算','线性空间算光'),('编码','Linear → sRGB')]):
                x=60+i*395
                card(d,(x,225,x+370,485), GREEN if int(p*6)%3==i else '#3b4444')
                txt(d,x+28,260,f'0{i+1}',28,GREEN)
                txt(d,x+28,310,label,64)
                txt(d,x+28,420,sub,28,MUTED)
            txt(d, 60, 510, '颜色贴图解码 · 数据贴图保留数值', 30, GREEN)
        d.rectangle((0, 567, W, 675), fill='#101416')
        txt(d,60,582,captions[scene][0],28)
        txt(d,60,627,captions[scene][1],24,MUTED)
        d.rectangle((60,690,1220,695),fill='#35413c')
        d.rectangle((60,690,60+1160*min(1,t/DURATION),695),fill=GREEN)
        return im

    curve_svg()
    poster = frame(0)
    poster.save(OUT / 'gamma-video-poster.jpg', quality=92)
    command = [ffmpeg, '-y', '-hide_banner', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}', '-r', str(FPS), '-i', '-', '-an', '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p', '-vf', 'scale=in_range=full:out_range=limited:out_color_matrix=bt709', '-color_range', 'tv', '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'iec61966-2-1', '-movflags', '+faststart', str(OUT / 'gamma-explained.mp4')]
    process = subprocess.Popen(command, stdin=subprocess.PIPE)
    try:
        for f in range(FPS*DURATION):
            process.stdin.write(frame(f/FPS).tobytes())
            if f % (FPS*10) == 0:
                print(f'Rendered chapter {f//(FPS*10)+1}/6', flush=True)
    finally:
        process.stdin.close()
    if process.wait() != 0:
        raise SystemExit('ffmpeg encoding failed')
    print(f'Created {OUT / "gamma-explained.mp4"}', flush=True)


if __name__ == '__main__':
    main()
