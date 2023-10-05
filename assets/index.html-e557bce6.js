import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as p,c as r,e as t}from"./app-55faa81b.js";const o={},s=t('<h2 id="输出文件命名缩写说明" tabindex="-1"><a class="header-anchor" href="#输出文件命名缩写说明" aria-hidden="true">#</a> 输出文件命名缩写说明</h2><p>SLM: 慢动作输出帧率</p><p>16bit：16bit高精度输出</p><p>QE：QuickExtract开启快速拆帧</p><p>HW：HardwareDecode开启硬件解码</p><p>DI：DeInterlaced反交错开启</p><p>DN：DeNoise降噪开启</p><p>OCHDR：OneClickHDR一键HDR</p><p>DS：开启动态光流</p><p>S: 光流尺度</p><p>NCNN：使用核显或A卡在NCNN架构下补帧</p><p>RIFE: 补帧所用的RIFE模型</p><p>FP16：开启N卡半精度模式</p><p>RR：RIFE-Reversed反向光流</p><p>RFE：RIFE-Foward Ensemble双向光流</p><p>TTA: TTA模式序号（从0开始）</p><p>FD: Frame Deduplication重复帧去除模式</p><p>SR: SuperResolution使用的超分模型</p><h2 id="进度条参数说明" tabindex="-1"><a class="header-anchor" href="#进度条参数说明" aria-hidden="true">#</a> 进度条参数说明</h2><p>R: 当前渲染的帧数，</p><p>C: 当前补帧或处理中的帧数，</p><p>S: 最近识别到的转场，</p><p>SC：识别到的转场数量，</p><p>RPT：ReadProcessTime单次读取任务处理时间，指从输入（视频或图片序列所在文件夹）拆帧到内存所花的时间</p><p>TAT：TaskAcquireTime单次补帧任务获取时间</p><p>PT：ProcessTime单次补帧任务处理时间</p><p>QL：QueueLength补帧任务队列长度</p><p>SR：SuperResolution当前正在超分的帧数</p><p>SRTAT：SuperResolutionTaskAquireTime单次超分任务获取时间</p><p>SRPT：SuperResolutionProcessTime单次超分任务处理时间</p><p>SRL：SuperResolutionQueueLength超分任务队列长度</p><h2 id="对于上述参数的特别说明" tabindex="-1"><a class="header-anchor" href="#对于上述参数的特别说明" aria-hidden="true">#</a> 对于上述参数的特别说明</h2><ul><li><p>未超分仅补帧时，QL值长期维持在10以下说明<strong>拆帧遇到瓶颈，此时TAT&gt;0.1</strong>，请检查CPU占用是否100%，如是，请更换CPU软编压制参数（如压制预设从slow改为fast），或更换单核性能更强的CPU。若未开启<strong>快速拆帧</strong>，且RPT数值较大（&gt;10s），请开启<strong>快速拆帧</strong>以减轻CPU负荷。开启高精度工作流且为CPU压制时，若CPU不够强劲，QL=0为正常现象。</p></li><li><p>既超分又补帧时，QL=0，TAT&gt;1为正常现象，尽量保证<strong>SRL&gt;0</strong>，SRTAT以使显卡达到最大工作效率，因为SVFI先超分后补帧，原因同上</p></li><li><p>TAT(SRTAT)值为0，且QL(SRL)值稳定在较高的值，说明工作速度瓶颈主要在显卡性能，此状态能最大程度发挥显卡性能，<strong>为理想的工作情况。</strong></p></li></ul>',33),i=[s];function a(n,c){return p(),r("div",null,i)}const R=e(o,[["render",a],["__file","index.html.vue"]]);export{R as default};
