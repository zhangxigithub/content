function showHot(visibility){
                     if(visibility) {
                         visibility = "visible"
                     }else {
                         visibility = "hidden";
                     }
                     document.getElementById("hot_logo").style.visibility = visibility;
                 }
             
             function setFontSize(size)
             {
                 document.getElementById("result_content").style.fontSize = size+"px";
             }

             function addBottomHeight(bottomHeight)
             {
                 var height = document.body.scrollHeight;
                 document.body.style.height= height + bottomHeight;
             }


             function demo()
             {
                $.ajax({
                  url: 'http://mobapp.chinaso.com/1/category/recmdNews',
                  data: {'nid':'http://stock.sohu.com/20140730/n402909647.shtml'},
                  success: function(json)
                  {
                    //alert(json["newsList"][1]["title"]);
                  },
                  dataType: 'json'
                });
             }