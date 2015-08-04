function indexOf (str, needles, offset) {
    if (!Array.isArray(needles)) {
        needles = [needles]
    }
    if (needles.length > 0) {
        for (var i = offset || 0; i < str.length; ++i) {
            var mlen = needles.length
            for (var j = 0; j < mlen; ++j) {
                var needle = needles[j]
                var matches = false
                var match
                if (needle instanceof RegExp) {
                    var source = needle.source
                    if (/^\[[^\]]+\]$/.test(source)) {
                        var re = new RegExp('^' + source + '$')
                        matches = re.test(str[i])
                        match = str[i]
                    }
                } else {
                    matches = str.substr(i, needle.length) === needle
                    match = needle
                }
                if (matches) {
                    return {
                        index: i,
                        match: match
                    }
                }
            }
        }
    }
}

module.exports = indexOf