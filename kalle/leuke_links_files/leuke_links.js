// Created by iWeb 2.0.2 local-build-20080110

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,195),url:'leuke_links_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'leuke_links_files/stroke_1.png'},{rect:new IWRect(2,-2,296,4),url:'leuke_links_files/stroke_2.png'},{rect:new IWRect(298,-2,4,4),url:'leuke_links_files/stroke_3.png'},{rect:new IWRect(298,2,4,195),url:'leuke_links_files/stroke_4.png'},{rect:new IWRect(298,197,4,5),url:'leuke_links_files/stroke_5.png'},{rect:new IWRect(2,197,296,5),url:'leuke_links_files/stroke_6.png'},{rect:new IWRect(-2,197,4,5),url:'leuke_links_files/stroke_7.png'}],new IWSize(300,200))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('leuke_links_files/leuke_linksMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id2');applyEffects()}
function onPageUnload()
{Widget.onunload();}
