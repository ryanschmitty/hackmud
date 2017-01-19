function(context, args)
{
    var D=#s.dtr.lib();  
    
    var result = []
    for (var i in math) {
        if (/\S/.test(math[i])) {
            var item = {math:null,NPCloc:null,p:null,paladin:null}
            item.math = D.decolor(math[i])
            item.NPCloc = /#s\..+?(?=})/.exec(D.decolor(math[i]))[0]
            item.paladin = "palad1n.harvest{t:"+item.NPCloc+"}"
            result.push(item.paladin)
        }
    }
    return result
}
