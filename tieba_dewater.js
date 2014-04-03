function banner_path() {
    return 'div.p_thread';
}

function extract_floor_info(bot) {
    var info = bot;
    var re = new Object;
    re["poster"] = info.find('li.d_name').text();
    re["time"] = info.find('ul.p_tail li').eq(2).text();
    re["id"] = info.find('ul.p_tail li').eq(1).text().replace(/楼.*$/,'');
    re["content"] = info.find('div.d_post_content').html().
        replace(/<\/?font[^>]*>/g, '');
    re["word_num"] = re["content"].replace('<[^>]+>','').length;
    return re;
}

function floor_path() {
    return 'div.l_post';
}

function page_charset() {
    var h = $('meta').attr('charset');
    if(!h) return 'gb2312';
    return h;
}

function get_topic_name() {
    var topic = $('h1').text();
    return topic;
}

function get_page_num() {
    var pg = $('li.l_reply_num');
    if(!pg) return;
    var num = pg.text();
    var num_m = num.match(/共(\d+)页/);
    if(!num_m) return;
    return num_m[1];
}

function format_thread_url_1st(url) {
    url = url.replace(/\?.*$/, '');
    return url;
}

function format_thread_url_ith(url,i)  {
    var j = i.toString();
    var n_url = url.replace(/$/, '?pn='+ j);
    return n_url;
}
