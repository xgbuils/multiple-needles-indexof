function indexOf (str, needles, offset) {
    if (!Array.isArray(needles)) {
        needles = [needles]
    }
    if (needles.length > 0) {
        for (var i = offset || 0; i < str.length; ++i) {
            var mlen = needles.length
            for (var j = 0; j < mlen; ++j) {
                var needle = needles[j]
                if (str.substr(i, needle.length) === needle) {
                    return {
                        index: i,
                        match: needle
                    }
                }
            }
        }
    }
}

module.exports = indexOf