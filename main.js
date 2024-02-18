<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 15.0px Helvetica; color: #2ba524; -webkit-text-stroke: #2ba524; background-color: #f2f2f2}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 15.0px Helvetica; color: #343434; -webkit-text-stroke: #343434; background-color: #f2f2f2; min-height: 18.0px}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 15.0px Helvetica; color: #343434; -webkit-text-stroke: #343434; background-color: #f2f2f2}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 15.0px Helvetica; color: #757575; -webkit-text-stroke: #757575; background-color: #f2f2f2}
    span.s1 {font-kerning: none}
    span.s2 {font-kerning: none; color: #343434; -webkit-text-stroke: 0px #343434}
    span.s3 {font-kerning: none; color: #757575; -webkit-text-stroke: 0px #757575}
    span.s4 {font-kerning: none; color: #6b00ff; -webkit-text-stroke: 0px #6b00ff}
    span.s5 {font-kerning: none; color: #2ba524; -webkit-text-stroke: 0px #2ba524}
    span.s6 {font-kerning: none; color: #1e80c3; -webkit-text-stroke: 0px #1e80c3}
    span.s7 {font-kerning: none; color: #fb006d; -webkit-text-stroke: 0px #fb006d}
    span.Apple-tab-span {white-space:pre}
  </style>
</head>
<body>
<p class="p1"><span class="s1">import</span><span class="s2"> </span><span class="s3">*</span><span class="s2"> </span><span class="s1">as</span><span class="s2"> THREE </span><span class="s1">from</span><span class="s2"> </span><span class="s4">'three'</span><span class="s3">;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p3"><span class="s5">const</span><span class="s1"> scene </span><span class="s3">=</span><span class="s1"> </span><span class="s5">new</span><span class="s1"> THREE</span><span class="s3">.</span><span class="s6">Scene</span><span class="s3">();</span></p>
<p class="p3"><span class="s5">const</span><span class="s1"> camera </span><span class="s3">=</span><span class="s1"> </span><span class="s5">new</span><span class="s1"> THREE</span><span class="s3">.</span><span class="s6">PerspectiveCamera</span><span class="s3">(</span><span class="s1"> </span><span class="s7">75</span><span class="s3">,</span><span class="s1"> window</span><span class="s3">.</span><span class="s1">innerWidth </span><span class="s3">/</span><span class="s1"> window</span><span class="s3">.</span><span class="s1">innerHeight</span><span class="s3">,</span><span class="s1"> </span><span class="s7">0.1</span><span class="s3">,</span><span class="s1"> </span><span class="s7">1000</span><span class="s1"> </span><span class="s3">);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p3"><span class="s5">const</span><span class="s1"> renderer </span><span class="s3">=</span><span class="s1"> </span><span class="s5">new</span><span class="s1"> THREE</span><span class="s3">.</span><span class="s6">WebGLRenderer</span><span class="s3">();</span></p>
<p class="p3"><span class="s1">renderer</span><span class="s3">.</span><span class="s1">setSize</span><span class="s3">(</span><span class="s1"> window</span><span class="s3">.</span><span class="s1">innerWidth</span><span class="s3">,</span><span class="s1"> window</span><span class="s3">.</span><span class="s1">innerHeight </span><span class="s3">);</span></p>
<p class="p3"><span class="s1">document</span><span class="s3">.</span><span class="s1">body</span><span class="s3">.</span><span class="s1">appendChild</span><span class="s3">(</span><span class="s1"> renderer</span><span class="s3">.</span><span class="s1">domElement </span><span class="s3">);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p3"><span class="s5">const</span><span class="s1"> geometry </span><span class="s3">=</span><span class="s1"> </span><span class="s5">new</span><span class="s1"> THREE</span><span class="s3">.</span><span class="s6">BoxGeometry</span><span class="s3">(</span><span class="s1"> </span><span class="s7">1</span><span class="s3">,</span><span class="s1"> </span><span class="s7">1</span><span class="s3">,</span><span class="s1"> </span><span class="s7">1</span><span class="s1"> </span><span class="s3">);</span></p>
<p class="p3"><span class="s5">const</span><span class="s1"> material </span><span class="s3">=</span><span class="s1"> </span><span class="s5">new</span><span class="s1"> THREE</span><span class="s3">.</span><span class="s6">MeshBasicMaterial</span><span class="s3">(</span><span class="s1"> </span><span class="s3">{</span><span class="s1"> color</span><span class="s3">:</span><span class="s1"> </span><span class="s7">0x00ff00</span><span class="s1"> </span><span class="s3">}</span><span class="s1"> </span><span class="s3">);</span></p>
<p class="p3"><span class="s5">const</span><span class="s1"> cube </span><span class="s3">=</span><span class="s1"> </span><span class="s5">new</span><span class="s1"> THREE</span><span class="s3">.</span><span class="s6">Mesh</span><span class="s3">(</span><span class="s1"> geometry</span><span class="s3">,</span><span class="s1"> material </span><span class="s3">);</span></p>
<p class="p3"><span class="s1">scene</span><span class="s3">.</span><span class="s1">add</span><span class="s3">(</span><span class="s1"> cube </span><span class="s3">);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p3"><span class="s1">camera</span><span class="s3">.</span><span class="s1">position</span><span class="s3">.</span><span class="s1">z </span><span class="s3">=</span><span class="s1"> </span><span class="s7">5</span><span class="s3">;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p3"><span class="s5">function</span><span class="s1"> animate</span><span class="s3">()</span><span class="s1"> </span><span class="s3">{</span></p>
<p class="p3"><span class="s1"><span class="Apple-tab-span">	</span>requestAnimationFrame</span><span class="s3">(</span><span class="s1"> animate </span><span class="s3">);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p3"><span class="s1"><span class="Apple-tab-span">	</span>cube</span><span class="s3">.</span><span class="s1">rotation</span><span class="s3">.</span><span class="s1">x </span><span class="s3">+=</span><span class="s1"> </span><span class="s7">0.01</span><span class="s3">;</span></p>
<p class="p3"><span class="s1"><span class="Apple-tab-span">	</span>cube</span><span class="s3">.</span><span class="s1">rotation</span><span class="s3">.</span><span class="s1">y </span><span class="s3">+=</span><span class="s1"> </span><span class="s7">0.01</span><span class="s3">;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p3"><span class="s1"><span class="Apple-tab-span">	</span>renderer</span><span class="s3">.</span><span class="s1">render</span><span class="s3">(</span><span class="s1"> scene</span><span class="s3">,</span><span class="s1"> camera </span><span class="s3">);</span></p>
<p class="p4"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p3"><span class="s1">animate</span><span class="s3">();</span></p>
</body>
</html>
