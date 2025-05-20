// Created by iWeb 2.0.2 local-build-20080110

function createMediaStream_id2()
{return IWCreatePhotocast("file://localhost/Volumes/jinke/kalle/ruimtefeestje_files/rss.xml",false,true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Volumes/jinke/kalle',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Volumes/jinke/kalle',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(187,187),new IWSize(187,0),new IWSize(229,202),27,27,0,new IWSize(-2,16)),new IWPhotoFrame([IWCreateImage('ruimtefeestje_files/GraphPaper_01.png'),IWCreateImage('ruimtefeestje_files/GraphPaper_02.png'),IWCreateImage('ruimtefeestje_files/GraphPaper_01.png'),IWCreateImage('ruimtefeestje_files/GraphPaper_01.png'),IWCreateImage('ruimtefeestje_files/GraphPaper_09.png'),IWCreateImage('ruimtefeestje_files/GraphPaper_08.png'),IWCreateImage('ruimtefeestje_files/GraphPaper_07.png'),IWCreateImage('ruimtefeestje_files/GraphPaper_01.png')],null,0,0.600000,90.000000,0.000000,90.000000,0.000000,89.000000,11.000000,89.000000,7.000000,11.000000,11.000000,11.000000,11.000000,'ruimtefeestje_files/graphpaper_tape.png',new IWPoint(0.500000,0),new IWSize(155,47),0.300000),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:0,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('ruimtefeestje_files/ruimtefeestjeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
