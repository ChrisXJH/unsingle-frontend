function Event(obj) {
    console.log(obj);
    this.id = obj._id;
    this.title = obj.title;
    this.startTime = obj.startTime;
    this.endTime = obj.endTime;
    this.description = obj.description;
}

Event.prototype.appendHtmlTo = function (dom) {
    dom.append($(this.generateHtml()));
};

Event.prototype.generateHtml = function () {
    return `
    <li class="item">
    <div id="event-` + this.id + `" class="eventCard" onclick="eventDetails('` + this.id + `')">
    <p class="caption">` + this.title + `</p>
    </div>
    </li>
    `;
};
