var Membersheep;
(function (Membersheep) {
    Membersheep[Membersheep["simple"] = 0] = "simple";
    Membersheep[Membersheep["standart"] = 1] = "standart";
    Membersheep[Membersheep["premium"] = 2] = "premium";
})(Membersheep || (Membersheep = {}));
var membersheep = Membersheep.standart;
var membersheepReverse = Membersheep[2];
console.log(membersheep);
console.log(membersheepReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["vk"] = "vk";
    SocialMedia["facebook"] = "facebook";
    SocialMedia["instagram"] = "instagram";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.instagram;
console.log(social);
