/*
	Copyright (c) 2011 Oscar Godson ( http://oscargodson.com ) and Sebastian Nitu ( http://sebnitu.com )
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
	
	More infomation on http://oscargodson.com/labs/jkey
	or fork it at https://github.com/OscarGodson/jKey
	
	Special thanks to Macy Abbey
*/
(function(a){a.fn.jkey=function(b,c,d){function l(a){var b,c={};for(b in a){if(a.hasOwnProperty(b)){c[a[b]]=b}}return c}var e=this;if(this[0]&&!this[0].parentNode){e=document}var f={a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,shift:16, leftShift: 14,ctrl:17,control:17,alt:18,option:18,opt:18,cmd:224,command:224,fn:255,"function":255,backspace:8,osxdelete:8,enter:13,"return":13,space:32,spacebar:32,esc:27,escape:27,tab:9,capslock:20,capslk:20,"super":91,windows:91,insert:45,"delete":46,home:36,end:35,pgup:33,pageup:33,pgdn:34,pagedown:34,left:37,up:38,right:39,down:40,"!":49,"@":50,"#":51,$:52,"%":53,"^":54,"&":55,"*":56,"(":57,")":48,"`":96,"~":96,"-":45,_:45,"=":187,"+":187,"[":219,"{":219,"]":221,"}":221,"\\":220,"|":220,";":59,":":59,"'":222,'"':222,",":188,"<":188,".":190,">":190,"/":191,"?":191};var g="";var h="";if(typeof c=="function"&&typeof d=="undefined"){d=c;c=false}if(b.toString().indexOf(",")>-1){var i=b.match(/[a-zA-Z0-9]+/gi)}else{var i=[b]}for(g in i){if(!i.hasOwnProperty(g)){continue}if(i[g].toString().indexOf("+")>-1){var j=[];var k=i[g].split("+");for(h in k){j[h]=f[k[h]]}i[g]=j}else{i[g]=f[i[g]]}}var m=l(f);return this.each(function(){e=a(this);var b=[];e.bind("keydown.jkey",function(e){b[e.keyCode]=e.keyCode;if(a.inArray(e.keyCode,i)>-1){if(typeof d=="function"){d.call(this,m[e.keyCode]);if(c===false){e.preventDefault()}}}else{for(g in i){if(a.inArray(e.keyCode,i[g])>-1){var f="unchecked";for(h in i[g]){if(f!=false){if(a.inArray(i[g][h],b)>-1){f=true}else{f=false}}}if(f===true){if(typeof d=="function"){var j="";for(var k in b){if(b[k]!=""){j+=m[b[k]]+"+"}}j=j.substring(0,j.length-1);d.call(this,j);if(c===false){e.preventDefault()}}}}}}}).bind("keyup.jkey",function(a){b[a.keyCode]=""})})}})(jQuery)