function banner_path() {
    return 'div.p_thread';
}

function tidy_body_html(d) {
    return d.replace(/<script.+?<\/script>/g,'').replace(/class="l_post .+?"/g, 'class="l_post"').replace(/data-field='.+?'/g,'').replace(/class="d_post_content .+?"/g, 'class="d_post_content"');
}

function extract_floor_info(bot) {
    var info = bot;
    var re = new Object;
    re["poster"] = info.find('li.d_name').text() || info.find('a.p_author').text();
    re["time"] = info.find('ul.p_tail li').eq(1).text() || info.find('.tail-info').eq(2).text();
    re["id"] = info.find('ul.p_tail li').eq(0).text().replace(/楼.*$/,'') || info.find('.tail-info').eq(1).text().replace(/楼.*$/,'');
    re["content"] = info.find('div.d_post_content').html().
        replace(/<\/?font[^>]*>/g, '');
    return re;
}

function floor_path() {
    return 'div.l_post';
}

function page_charset() {
    return 'utf-8';
}

function get_topic_name() {
    var topic = $('h1').text() || $('h3').text();
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
