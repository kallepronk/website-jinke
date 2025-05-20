// Created by iWeb 2.0.2 local-build-20080110

function createMediaStream_id2()
{return IWCreateMediaCollection("file://localhost/Volumes/jinke/kalle/fotos/fotos_files/rss.xml",true,255,["Nog geen foto's","%d foto","%d foto's"],["","%d fragment","%d fragmenten"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Volumes/jinke/kalle/fotos',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget4'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Volumes/jinke/kalle/fotos',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(248,186),new IWSize(248,37),new IWSize(298,238),27,27,0,new IWSize(89,74)),new IWPhotoFrame([IWCreateImage('fotos_files/spiralboook_ul.png'),IWCreateImage('fotos_files/spiralboook_top.png'),IWCreateImage('fotos_files/spiralboook_ur.png'),IWCreateImage('fotos_files/spiralboook_right.png'),IWCreateImage('fotos_files/spiralboook_lr.png'),IWCreateImage('fotos_files/spiralboook_bottom.png'),IWCreateImage('fotos_files/spiralboook_ll.png'),IWCreateImage('fotos_files/spiralboook_left.png')],null,1,0.800000,0.000000,10.000000,0.000000,19.000000,62.000000,49.000000,48.000000,72.000000,20.000000,1.000000,20.000000,1.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget4',null,'widget5',{showTitle:true,showMetric:false})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-3,4,6,28),url:'fotos_files/stroke.png'},{rect:new IWRect(-3,-3,6,7),url:'fotos_files/stroke_1.png'},{rect:new IWRect(3,-3,190,7),url:'fotos_files/stroke_2.png'},{rect:new IWRect(193,-2,4,6),url:'fotos_files/stroke_3.png'},{rect:new IWRect(193,4,6,28),url:'fotos_files/stroke_4.png'},{rect:new IWRect(193,32,6,5),url:'fotos_files/stroke_5.png'},{rect:new IWRect(3,32,190,6),url:'fotos_files/stroke_6.png'},{rect:new IWRect(-3,32,6,6),url:'fotos_files/stroke_7.png'}],new IWSize(196,35))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('fotos_files/fotosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
