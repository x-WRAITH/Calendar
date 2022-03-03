function HoliDays() {
    //New Year
    let ny = document.querySelector("[data-day='1'][data-month-name='Styczeń']");
    if (ny) {
        ny.className = "data-select holiday"}
    //Three Kings
    let tk = document.querySelector("[data-day='6'][data-month-name='Styczeń']");
    if (tk) {
        tk.className = "data-select holiday"}
    //Easter
    let e = document.querySelector("[data-day='4'][data-month-name='Kwiecień']");
    if (e) {
        e.className = "data-select holiday"}
    //Monday Easter
    let me = document.querySelector("[data-day='5'][data-month-name='Kwiecień']");
    if (me) {
        me.className = "data-select holiday"}
    //Labour Day
    let ld = document.querySelector("[data-day='1'][data-month-name='Maj']");
    if (ld) {
        ld.className = "data-select holiday"}
    //Three May
    let tm = document.querySelector("[data-day='3'][data-month-name='Maj']");
    if (tm) {
        tm.className = "data-select holiday"}
    //Pentecost
    let p = document.querySelector("[data-day='23'][data-month-name='Maj']");
    if (p) {
        p.className = "data-select holiday"}
    //Corpus Christi
    let cc = document.querySelector("[data-day='3'][data-month-name='Czerwiec']");
    if (cc) {
        cc.className = "data-select holiday"}
    //Polish troops festival
    let ptf = document.querySelector("[data-day='15'][data-month-name='Sierpień']");
    if (ptf) {
        ptf.className = "data-select holiday"}
    //All the saints
    let ats = document.querySelector("[data-day='1'][data-month-name='Listopad']");
    if (ats) {
        ats.className = "data-select holiday"}
    //Independence Day
    let ind = document.querySelector("[data-day='11'][data-month-name='Listopad']");
    if (ind) {
        ind.className = "data-select holiday"}
    //Christmas
    let c = document.querySelector("[data-day='25'][data-month-name='Grudzień']");
    if (c) {
        c.className = "data-select holiday"}
    //Two Day Christmas
    let twc = document.querySelector("[data-day='26'][data-month-name='Grudzień']");
    if (twc) {
        twc.className = "data-select holiday"}
}