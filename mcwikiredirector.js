const matchEnglish = /https:\/\/minecraft\.fandom\.com\/wiki\/(.*)$/;
const matchRegional = /https:\/\/minecraft\.fandom\.com\/(.*?)\/wiki\/(.*)$/;

const initialUrl = window.location.href;
const urlEnglish = initialUrl.match(matchEnglish);
if (urlEnglish) {
    window.location.href = `https://minecraft.wiki/w/${urlEnglish[1]}`
} else {
    const urlRegional = initialUrl.match(matchRegional);
    window.location.href = `https://${urlRegional[1]}.minecraft.wiki/w/${urlRegional[2]}`
}
