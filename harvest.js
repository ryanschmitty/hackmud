function(c, a)
{
    var D=#s.dtr.lib();  

    if (!a) {
        var r = []
        var math = #s.math.t1({})
        for (var i in math) {
            var loc = /#s\..+?(?=})/.exec(D.decolor(math[i]))
            if (loc)
                r.push("harvest{t:"+loc[0]+"}")
        }
        return r
    }

    if (a.t) {
        var p = #s.palad1n.harvest(a)
        if (p.ok) {
            var r = []
            for (var i in p.l)
                r.push(/#s\..+?(?=})/.exec(D.decolor(p.l[i]))[0].trim())
            #db.r({rs:{$exists:true}})
            #db.i({rs:r})
            return "harvest{n:true}"
        }
    }

    if (a.n) {
        var rs = #db.f({rs:{$exists:true}}).first().rs
        var s = "math.t1{t1:"+rs[0]+"}\n" +
                "math.t1{t1:"+rs[1]+"}\n" +
                "math.t1{t1:"+rs[2]+"}\n"
        #db.u({rs:{$exists:true}}, {$pop:{rs:-1}})
        #db.u({rs:{$exists:true}}, {$pop:{rs:-1}})
        #db.u({rs:{$exists:true}}, {$pop:{rs:-1}})
        return s
    }
}
