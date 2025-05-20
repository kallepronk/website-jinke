// Created by iWeb 2.0.2 local-build-20080110

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id5" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="176" height="160" style="height: 160px; left: 262px; position: absolute; top: 69px; width: 176px; z-index: 1; "><param name="src" value="Media/tiny.3gp" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id5" type="video/quicktime" width="176" height="160" style="height: 160px; left: 262px; position: absolute; top: 69px; width: 176px; z-index: 1; "><param name="src" value="tranentrekkendetrollen_files/Trollen%20Sage-tiny.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/tiny.3gp"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id5" type="video/quicktime" width="176" height="160" data="Media/tiny.3gp" style="height: 160px; left: 262px; position: absolute; top: 69px; width: 176px; z-index: 1; "><param name="src" value="Media/tiny.3gp"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('tranentrekkendetrollen_files/tranentrekkendetrollenMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id6');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
