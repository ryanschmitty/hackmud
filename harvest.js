function(context, args)
{
    var D=#s.dtr.lib();  
    var result = []
    if (!args) {
        var math = #s.math.t1({})
        for (var i in math) {
            if (/\S/.test(math[i])) {
                result.push("harvest{t:"+/#s\..+?(?=})/.exec(D.decolor(math[i]))[0]+"}")
            }
        }
    }
    else {
        var pal = #s.palad1n.harvest(args)
        if (pal.ok) {
            for (var i in pal.l) {
                if (i >= 15) break;
                result.push("math.t1{t1:"+/#s\..+?(?=})/.exec(D.decolor(pal.l[i]))[0]+"}")
            }
        }
        else {
            result.push(pal)
        }
    }
    return result
}
