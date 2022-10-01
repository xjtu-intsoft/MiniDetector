function t(t, r) {
    return A.encrypt(r, t);
}

var A = require("/rsaJS.js"), r = "-----BEGIN RSA PRIVATE KEY-----MIICXQIBAAKBgQCk7WKdggwBOtteLL5sPom8RYCjuw0hy6R1jH39tCaep1Dns02bi4CYHk2dSR / t0ABgF5pHYeMxHa74Dp6Z6SjfAKMUu53BbTR615ehK + 03BjtzJzviTF1 / NtLmGaR3aawrDp7oQgq33dfIYbWLuAMkHNiWaoXaGyHh3a8jS2vxfQIDAQABAoGAIKRnLzts + tVWU5ZRfgUGp7 + tzToZSEYQ378VtJ / yQNZmueUQCCgdJH5i6C1v51aSrHIfc99Y4wC3/ 5qNI3M1RlRpIakmcaiEv1m6huDPLKFq6Y1e+ AZ0Cb0xo3bny + VTOvfGgcAdSa6++K47bGaxyKzwGeNZQkltm5sgbVcKvkECQQDVjWbSU8P8nDb+TP5Aqr + DaMVA425wv2ra2jhxd6KqKxgHHB7yYWlODiYNrtALOEG9zfSpHVQWhZpiKq8XcWwRAkEAxbWzPAqZxaZ / XTs65uCL0 + iqif0qCSDUNis61wYm2UwOh4LqBZIFop94B3ybEXbCvUl0v26H0fgXjFUErvlKrQJBAKjbAe5U5accLi + t2WxwlrXlZfME4hKsiGU8H10455n+ MSWOCrpEY + ugLF6tVztH5FOcQlRmKFMWmRf + ACxdNsECQDBjkEKZtZkSbwm6fWgUfSSYRWUQeUFSr52yZuxJrShx3Px9phlG6 + opbY8niCx2DKOXXuObgdJ6DglipYrNqOECQQCndP + zU / jwlvjQzEabKdP05uFc5JV6ySFBQwuoENbEvW3uz + Yz31xDYbrwIzrysVDovlj0ExL6LC + JRvpJmHcN-----END RSA PRIVATE KEY-----", C = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCk7WKdggwBOtteLL5sPom8RYCjuw0hy6R1jH39tCaep1Dns02bi4CYHk2dSR / t0ABgF5pHYeMxHa74Dp6Z6SjfAKMUu53BbTR615ehK + 03BjtzJzviTF1/ NtLmGaR3aawrDp7oQgq33dfIYbWLuAMkHNiWaoXaGyHh3a8jS2vxfQIDAQAB-----END PUBLIC KEY-----";

module.exports = {
    encryptPwd: function(A) {
        return t(A, C);
    },
    decryptPwd: function(t) {
        return A.decrypt(r, t);
    },
    encryptWithKey: t
};