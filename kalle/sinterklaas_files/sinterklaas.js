// Created by iWeb 2.0.2 local-build-20080110

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id1" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="220" height="16"><param name="src" value="Media/Sinterklaas.m4a" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id1" type="video/quicktime" width="220" height="16"><param name="src" value="Media/Sinterklaas.m4a"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id1" type="video/quicktime" width="220" height="16" data="Media/Sinterklaas.m4a"><param name="src" value="Media/Sinterklaas.m4a"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(1.0000,0.0000),color:'#3a060f',opacity:1.000000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,164),url:'sinterklaas_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'sinterklaas_files/stroke_1.png'},{rect:new IWRect(1,-1,246,2),url:'sinterklaas_files/stroke_2.png'},{rect:new IWRect(247,-1,2,2),url:'sinterklaas_files/stroke_3.png'},{rect:new IWRect(247,1,2,164),url:'sinterklaas_files/stroke_4.png'},{rect:new IWRect(247,165,2,2),url:'sinterklaas_files/stroke_5.png'},{rect:new IWRect(1,165,246,2),url:'sinterklaas_files/stroke_6.png'},{rect:new IWRect(-1,165,2,2),url:'sinterklaas_files/stroke_7.png'}],new IWSize(248,166)),shadow_1:new IWShadow({blurRadius:2,offset:new IWPoint(4.3633,7.8716),color:'#3a060f',opacity:1.000000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('sinterklaas_files/sinterklaasMoz.css')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
