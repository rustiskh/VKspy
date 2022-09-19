var EPopupName;
(function (EPopupName) {
    EPopupName["SIGN_IN"] = "sign-in";
    EPopupName["SIGN_UP"] = "sign-up";
    EPopupName["RESET_PASSWORD"] = "reset-password";
    EPopupName["FEEDBACK"] = "feedback";
    EPopupName["START_SPYING"] = "start-spying";
})(EPopupName || (EPopupName = {}));
var ESocialName;
(function (ESocialName) {
    ESocialName["VKONTAKTE"] = "vkontakte";
    ESocialName["INSTAGRAM"] = "instagram";
    ESocialName["WHATS_APP"] = "whats-app";
})(ESocialName || (ESocialName = {}));
var socialSelectItems = [
    {
        label: "Вконтакте",
        value: ESocialName.VKONTAKTE,
    },
    {
        label: "Инстаграм",
        value: ESocialName.INSTAGRAM,
    },
    {
        label: "WhatsApp",
        value: ESocialName.WHATS_APP,
    },
];
document.addEventListener("DOMContentLoaded", function () {
    var hamburgerBtn = document.documentElement.querySelector(".header-controls__btn--hamburger");
    var drawerBackdrop = document.documentElement.querySelector(".drawer__backdrop");
    var drawerCloseBtn = document.documentElement.querySelector(".drawer-controls__close-btn");
    var drawerNavItems = document.documentElement.querySelectorAll(".drawer-navigation__list-link");
    // var reviewsCardItem = document.documentElement.querySelectorAll(".reviews-cards__item");
    var popupItems = document.documentElement.querySelectorAll(".popup");
    var baseSelects = document.documentElement.querySelectorAll(".base-select");
    var baseSelectFields = document.documentElement.querySelectorAll(".base-select__field");
    var closePopupBtn = document.documentElement.querySelectorAll(".close-popup-item");
    // var socialSelectField = document.documentElement.querySelector(".select-social .base-select__field");
    var socialSelectListItems = document.documentElement.querySelectorAll(".select-social .base-select__list-item");
    // var socialSelectFieldText = socialSelectField.querySelector(".base-select__field-text");
    // var socialSelectFieldImg = socialSelectField.querySelector(".base-select__field-img");
    // var socialSelectFieldInput = socialSelectField.querySelector(".base-select__field-input");
    var handleOutsideClick = function (e) {
        var path = e.composedPath && e.composedPath();
        baseSelects.forEach(function (item) {
            if (item) {
                var isIncludePath = path.indexOf(item) !== -1;
                if (!isIncludePath) {
                    item.classList.remove("base-select--active");
                }
            }
        });
    };
    // reviewsCardItem.forEach(function (item) {
    //     var textBlock = item.querySelector(".reviews-cards__item-description-text");
    //     var textBlockHeight = textBlock.offsetHeight;
    //     var style = window.getComputedStyle(textBlock);
    //     var lineHeight = style.getPropertyValue("line-height");
    //     var lineHeightNumber = Number(lineHeight.replace(/\D+/g, ""));
    //     var isLongTextBlock = textBlockHeight / lineHeightNumber > 4;
    //     if (isLongTextBlock) {
    //         var textBlockBtn_1 = item.querySelector(".reviews-cards__item-description-btn");
    //         var onClickReviewsHandler = function () {
    //             var isShortTextBlock = textBlock.classList.contains("reviews-cards__item-description-text--short");
    //             if (isShortTextBlock) {
    //                 textBlockBtn_1.textContent = "Скрыть";
    //             }
    //             else {
    //                 textBlockBtn_1.textContent = "Подробнее";
    //             }
    //             textBlock.classList.toggle("reviews-cards__item-description-text--short");
    //         };
    //         if (!!textBlockBtn_1) {
    //             textBlockBtn_1.addEventListener("click", onClickReviewsHandler);
    //             textBlockBtn_1.classList.add("reviews-cards__item-description-btn--showed");
    //         }
    //         textBlock.classList.add("reviews-cards__item-description-text--short");
    //     }
    // });
    var onToggleDrawerHandler = function () {
        var drawerElement = document.documentElement.querySelector(".drawer");
        drawerElement.classList.toggle("drawer--showed");
        document.documentElement.classList.toggle("overflow-hidden");
    };
    var onToggleHeaderStateHandler = function () {
        var scrollY = window.scrollY;
        var isSmallHeader = scrollY > 100;
        var headerElement = document.documentElement.querySelector(".header-wrap");
        if (isSmallHeader) {
            headerElement.classList.add("header-wrap--small");
        }
        else {
            headerElement.classList.remove("header-wrap--small");
        }
    };
    var getDrawerState = function () {
        var drawerElement = document.documentElement.querySelector(".drawer");
        return drawerElement.classList.contains("drawer--showed");
    };
    var onClosePopups = function () {
        popupItems.forEach(function (item) { return item.classList.remove("popup--showed"); });
        // socialSelectFieldText.textContent = "Выберите соц.сеть";
        // socialSelectFieldInput.value = "";
        // socialSelectFieldImg.style.backgroundImage = "url(./images/icons/base-select-default.svg)";
        if (!getDrawerState()) {
            document.documentElement.classList.remove("overflow-hidden");
        }
    };
    // var onSelectSocialItemHandler = function (social) {
    //     var selectedSocialItem = socialSelectItems.filter(function (item) { return item.value === social; })[0];
    //     if (!!selectedSocialItem) {
    //         socialSelectFieldText.textContent = selectedSocialItem.label;
    //         socialSelectFieldInput.value = selectedSocialItem.value;
    //         socialSelectFieldImg.style.backgroundImage = "url(./images/base-select-" + selectedSocialItem.value + ".png)";
    //     }
    // };
    var onShowPopup = function (popupName, social) {
        onClosePopups();
        // if (!!social) {
        //     onSelectSocialItemHandler(social);
        // }
        var selectedPopup = document.querySelector(".popup--" + popupName);
        if (!getDrawerState()) {
            document.documentElement.classList.add("overflow-hidden");
        }
        if (!!selectedPopup) {
            selectedPopup.classList.add("popup--showed");
        }
    };
    baseSelectFields.forEach(function (item) {
        var onActiveBaseSelectHandler = function () {
            item.parentElement.classList.toggle("base-select--active");
        };
        item.addEventListener("click", onActiveBaseSelectHandler);
    });
    socialSelectListItems.forEach(function (item) {
        var localSocial = item.dataset.social;
        var onClickListItemHandler = function () {
            onSelectSocialItemHandler(localSocial);
            socialSelectField.parentElement.classList.remove("base-select--active");
        };
        item.addEventListener("click", onClickListItemHandler);
    });
    Object.keys(EPopupName).forEach(function (popupName) {
        var popupNameValue = EPopupName[popupName];
        var openPopupBtns = document.documentElement.querySelectorAll(".for-" + popupNameValue + "-popup");
        openPopupBtns.forEach(function (item) {
            // var localSelectedSocial = item.dataset
            //     .social;
            item.addEventListener("click", function () {
                // return onShowPopup(popupNameValue, localSelectedSocial);
                return onShowPopup(popupNameValue);
            });
        });
    });
    closePopupBtn.forEach(function (item) {
        item.addEventListener("click", onClosePopups);
    });
    drawerNavItems.forEach(function (item) {
        item.addEventListener("click", onToggleDrawerHandler);
    });
    drawerCloseBtn.addEventListener("click", onToggleDrawerHandler);
    drawerBackdrop.addEventListener("click", onToggleDrawerHandler);
    hamburgerBtn.addEventListener("click", onToggleDrawerHandler);
    document.addEventListener("scroll", onToggleHeaderStateHandler);
    document.body.addEventListener("click", handleOutsideClick);



    var faqItems = document.querySelectorAll(".faq-card");

    faqItems.forEach((faqItem) => {
        faqItem.addEventListener("click", function () {
            faqItems.forEach((item) => {
                if (item !== faqItem) {
                    item.classList.remove("faq-card--active");
                }
            });

            faqItem.classList.toggle("faq-card--active");
        });
    });
});
