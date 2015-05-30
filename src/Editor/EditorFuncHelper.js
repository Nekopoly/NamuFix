var WikiText= new function(){
  var txtarea=document.querySelector('txtarea[name=content]');
  this.isSomethingSelected=function(){
    return txtarea.selectionStart!=txtarea.selectionEnd;
  }
  this.getSelected=function(){
    var r=txtarea.value;
    var s=txtarea.selectionStart;
    var e=txtarea.selectionEnd;
    return r.substring(s,e);
  }
  this.replaceSelected=function(str){
    var r=txtarea.value;
    var s=txtarea.selectionStart;
    var e=txtarea.selectionEnd;
    txtarea.value=r.substring(0,s)+str+r.substring(e);
    txtarea.focus();
    txtarea.selectionStart=s;
    txtarea.selectionEnd=s+str.length;
  }
  this.ToggleWrapSelected=function(l,r_){
    if (typeof r === "undefined")
      var r = l;
    else
      var r = r_;
    var p=this.getSelected();
    if(p.indexOf(l)!=0||p.indexOf(r)!=(p.length-r.length));
      p=l+p+r;
    else
      p=p.substring(l.length,p.length-r.length)
    this.replaceSelected(p);
  }
}();
