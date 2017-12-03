function formate(n) {
    return n < 10 ? "0" + n : n;
}
module.exports = {
    timeFormate: function (timestring) {
        var oDate = new Date();
        oDate.setTime(timestring * 1000);
        return oDate.getFullYear() + '-' + formate(oDate.getMonth() + 1) + '-' + formate(oDate.getDate()) + ' ' + formate(oDate.getHours()) + ':' + formate(oDate.getMinutes()) + ':' + formate(oDate.getSeconds());
    }
}