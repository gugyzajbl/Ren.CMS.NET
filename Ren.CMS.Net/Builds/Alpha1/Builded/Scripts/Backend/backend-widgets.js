﻿function widgetAction(action,headerData)
{
    if (!BackendGui)
    {

        $('body').append("<script type=\"text/javascript\" src=\"/Scripts/Backend/backend-gui.js\"></script>");

    }
    var actionArray = action.toString().split(':');
    var actionOperator = null;
    var widgetName = null;
    var widgetAction = null;
    if (actionArray.length >= 1)
    {
        actionOperator = actionArray[0];
       
    }
    if (actionArray.length >= 2 && actionOperator != null)
    {
        if (actionOperator.toLowerCase() == "widget")
        {

            widgetName = actionArray[1];
        }

    }

    if (actionArray.length >= 3)
    {

        widgetAction = actionArray[2];

    }
 
    var widgetID = "#widget-" + widgetName;

    if (!headerData) headerData = {};
    //Load Widget
    var paras = { widget: widgetName, widgetHeaderData: headerData };
    
    var Widget = new BackendGui().dataStore;
    if (!document.getElementById("widget-" + widgetName)) {
        console.log("Widget " + widgetID + " is not loaded yet. Loading...");

        $(document).css({ cursor: 'progress' });
        Widget.isAsync(false);
        Widget.setFormat('html');
        Widget.setHttpVerb('POST');
        Widget.setUrl("/BackendHandler/Layout/Widget");
        Widget.setParameters(paras);
        Widget.doRequest();
        $(document).css({ cursor: 'auto' });

        var WidgetContent = Widget.getContent();

        var availableWidth =

            $('#frame-desktop-menubar').innerWidth() - (150 + 200 + 10);


        var taskbarWidth =
                $('#taskbar').innerWidth();

        var newTaskbarWidth = taskbarWidth + 150;
        var cls = "";
        if (availableWidth < newTaskbarWidth) {
            cls = "hiddenTaskbarItem";
            var nofState = new BackendGui().dialogStates.info;
            var notify = new BackendGui().dialog('taskbarFUll-x', "Taskbar ist voll...", "Ihre Taskbar ist voll, schließen Sie Anwendungen um die komplette Taskbar zu sehen.", " ");
            notify.remove();

            notify.create();



        }
        var liElementUnboxed = "<li class=\""+ cls +"\" style=\"float:left; display:inline-block; clear:none\"><ul id='taskbar-" + widgetName + "' style=\"float:left; clear:none\"> <li class=\"task-bar-unboxed\">";
        liElementUnboxed+= "";
      
        $('#frame-desktop-board').append(WidgetContent);

        var icon = $('#widget-' + widgetName).find(".widgetIcon").attr("src");
        var title = $('#widget-' + widgetName).find(".wgtTitle").html();
        var titleLong = title;
        //LANG_BACKEND_
        if (title.length > 13)
        {
            title = title.substring(0, 10) + "...";

        }

        liElementUnboxed+= "";
        liElementUnboxed += "<a title=\""+ titleLong +"\" class=\"tooltipTitle\" href=\"javascript: new widgetAction('widget:" + widgetName + ":open')\" style=\"display: inline-block\"><img src=\"" + icon + "\" class=\"widgetIcon\" style=\"display: inline-block\" />&nbsp;" + title + "</a>";
        liElementUnboxed += "<ul>";
        liElementUnboxed += "<li><a href=\"javascript: new widgetAction('widget:" + widgetName + ":open')\">Öffnen</a></li>";
        liElementUnboxed += "<li><a href=\"javascript: new widgetAction('widget:" + widgetName + ":hide')\">Minimieren</a></li>";

        liElementUnboxed += "<li><a href=\"javascript: new widgetAction('widget:" + widgetName + ":close')\">Schließen</a></li>";
        liElementUnboxed += "</ul>";
        liElementUnboxed += "</li></ul></li>";
        console.log("Widget loaded");
        console.log(widgetID);

        if (!document.getElementById("taskbar-" + widgetName)) {
            $('#taskbar').append(liElementUnboxed);
            $("#taskbar-" + widgetName).menu({
            });
            $('.tooltipTitle').each(function () { $(this).tooltip(); });
        }
    }


    var setActive = function (wID)
    {

        $('.backend-widget').each(function () {
            if ('#' + this.id != wID) {
                $(this).removeClass("backend-widget-active");
                $(this).addClass("backend-widget-inactive");

            }
        });
        $(wID).addClass("backend-widget-active");
        $(wID).removeClass("backend-widget-inactive");
    };

    var a = widgetAction.toLowerCase();


    var open = function (widgetName)
    {
       
        //First Step: Load Widget
        

      
        

      
        //Add Active Class (Z-INDEX: 1000);
        setActive('#widget-' + widgetName);
        $('#widget-' + widgetName).fadeIn();
       


    };

    var close = function (widgetName)
    {
        var $child = $('#widget-' + widgetName);
        if ($child.css("display") != "none" && $child.css("visibility") != "hidden") {
            $child.fadeOut('slow', function () {
                $("#taskbar-" + widgetName).remove();



                var availableWidth =

            $('#frame-desktop-menubar').innerWidth() - (150 + 200 + 10);


                var taskbarWidth =
                        $('#taskbar').innerWidth();

                var newTaskbarWidth = taskbarWidth + 150;
                var cls = "";
                if (availableWidth > newTaskbarWidth) {
                    $('.hiddenTaskbarItem:first-child').removeClass('hiddenTaskbarItem');
                  
                }
                $(this).remove();

            });
        }
        else {
            $child.remove();

        }

    };

    var hide = function (widgetName) {

        $('#widget-' + widgetName).fadeOut();
        setActive(null);
        


    };

    if (a == "open") open(widgetName);

    if (a == "close") close(widgetName);
    if (a == "hide") hide(widgetName);
}



function getWidgetHeaderData(widgetName)
{
   
    var dataE = '#widget-header-data-' + widgetName;
    var data = $(dataE).text();
    if (data == "" || !data) return "";

    var json = $.parseJSON(data);


    return json;

   

}


