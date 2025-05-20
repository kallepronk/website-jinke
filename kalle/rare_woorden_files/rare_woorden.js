// Created by iWeb 2.0.2 local-build-20080110

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,661),url:'rare_woorden_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'rare_woorden_files/stroke_1.png'},{rect:new IWRect(2,-2,746,4),url:'rare_woorden_files/stroke_2.png'},{rect:new IWRect(748,-2,5,4),url:'rare_woorden_files/stroke_3.png'},{rect:new IWRect(748,2,5,661),url:'rare_woorden_files/stroke_4.png'},{rect:new IWRect(748,663,5,4),url:'rare_woorden_files/stroke_5.png'},{rect:new IWRect(2,663,746,4),url:'rare_woorden_files/stroke_6.png'},{rect:new IWRect(-2,663,4,4),url:'rare_woorden_files/stroke_7.png'}],new IWSize(750,665))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('rare_woorden_files/rare_woordenMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
