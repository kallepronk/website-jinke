// Created by iWeb 2.0.2 local-build-20080110

function createMediaStream_id1()
{return IWCreatePhotocast("file://localhost/Volumes/jinke/kalle/fotos/Paginas/kreta_files/rss.xml",true,true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('file://localhost/Volumes/jinke/kalle/fotos/Paginas',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('file://localhost/Volumes/jinke/kalle/fotos/Paginas',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(169,169),new IWSize(169,0),new IWSize(203,184),27,27,0,new IWSize(21,23)),new IWPhotoFrame([IWCreateImage('kreta_files/Freestyle_01.png'),IWCreateImage('kreta_files/Freestyle_02.png'),IWCreateImage('kreta_files/Freestyle_03.png'),IWCreateImage('kreta_files/Freestyle_06.png'),IWCreateImage('kreta_files/Freestyle_09.png'),IWCreateImage('kreta_files/Freestyle_08.png'),IWCreateImage('kreta_files/Freestyle_07.png'),IWCreateImage('kreta_files/Freestyle_04.png')],null,2,0.533333,3.000000,3.000000,3.000000,3.000000,22.000000,24.000000,23.000000,25.000000,166.000000,222.000000,166.000000,222.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('kreta_files/kretaMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id3');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
