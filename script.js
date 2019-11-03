$( document ).ready(function() {
    $('.burgerBtn').click(function(e) {
        e.preventDefault();
        $('.navigation').toggleClass('hidden')
    });
    $(function () {
        var controller = new ScrollMagic.Controller({addIndicators: false});
        var width = $(window).width();
        var BREAK_POINTS = {
            DESKTOP: 'desktop',
            LAPTOP: 'laptop',
            TABLET: 'tablet',
            MOBILE: 'mobile',
        };
        var breakpoint = getBreakpoint();

        var $caseHome = $('.Header');
        var $advantages = $('.advantages');
        var $activity = $('.activity');
        var $projects = $('.projects ');
        // var $caseTech = $('.CaseTech');
        // var $caseAbout = $('.CaseAbout');
        // var $caseAboutSm = $('.CaseAboutSm');
        // var $caseClient = $('.CaseClient');
        // var $caseOpport = $('.CaseOpportunities');
        // var $caseMotiv = $('.Motivating');
        // var $caseOnboard = $('.Onboard');
        // var $caseDiscount = $('.Discounts');
        // var $caseMeasuring = $('.Measuring');
        // var $caseBuild = $('.Building');
        // var $caseImplement = $('.Implementing');
        // var $caseFilters = $('.Filters');
        // var $caseEnsure = $('.Ensuring');
        // var $casePart = $('.CaseSimilarPart');
        // var $caseResult = $('.CaseResult');
        // var $caseTeam = $('.CaseTeam');

        init();

        function init() {
            TweenMax.defaultEase = CircIn;
            TimelineMax.defaultEase = CircIn;
            // init slides containers

            setupHomeSection();
            setupAdvantagesSection();
            setupActivitySection();
            setupProjectSection();
            // setupTechSection();
            // setupAboutSection();
            // setupAboutSmSection();
            // setupClientSection();
            // setupOpportunitiesSection();
            // setupMotivatingSection();
            // setupOnboardSection();
            // setupDiscountSection();
            // setupMeasuringSection();
            // setupBuildingSection();
            // setupImplementSection();
            // setupFiltersSection();
            // setupEnsuringSection();
            // setupSimilarSection();
            // setupResultSection();
            // setupTeamSection();
        }
        function setupHomeSection() {
            var homeScene = new ScrollMagic.Scene({
                triggerElement: $caseHome[0],
                // triggerHook: 0,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .to($caseHome, 0.5, { opacity: 1})
                        .to($caseHome.find('.mask'), 0.7, { yPercent: 100})
                        .from($caseHome.find('.rectangle-mask'), 0.5, { height: 0})
                        .from($caseHome.find('.rectangle'), 0.5, { height: 0}, '+=0.2')
                        .from($caseHome.find('.logo'), 0.6, { xPercent: -7, opacity: 0}, '-=0.3')
                        .from($caseHome.find('.article'), 0.6, { xPercent: -7, opacity: 0}, '-=0.3')
                        .from($caseHome.find('.projectLink'), 0.6, { xPercent: -7, opacity: 0}, '-=0.3')

                )
                .addTo(controller)
        }
        function setupAdvantagesSection() {
            var addScene = new ScrollMagic.Scene({
                triggerElement: $advantages[0],
                triggerHook: 0.6,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($advantages.find('.subTitle '), 0.7, { opacity: 0, xPercent: -60})
                        .staggerFrom($advantages.find('.suggestion-item > *'), 0.5, {opacity: 0, scale: 0}, 0.3, '-=0.3')
                )
                .addTo(controller)
        }
        function setupActivitySection() {
            var activityScene = new ScrollMagic.Scene({
                triggerElement: $activity[0],
                triggerHook: 0.4,
                offset: -150,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($activity.find('.subTitle '), 0.7, { opacity: 0, xPercent: 60})
                        .staggerFrom($activity.find('.actionList .row > *'), 1, {opacity: 0, xPercent: -5}, 0.3)
                )
                .addTo(controller)
        }
        function setupProjectSection() {
            var projectScene = new ScrollMagic.Scene({
                triggerElement: $projects[0],
                triggerHook: 0.5,
                // offset: -150,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($projects.find('.subTitle '), 0.7, { opacity: 0, xPercent: -60})
                        .staggerFrom($projects.find('.projectList .row > *'), 1, {opacity: 0, xPercent: -5}, 0.3)
                        .from($projects.find('.toProject '), 0.5, { opacity: 0, xPercent: -5})
                )
                .addTo(controller)
        }
        function setupAboutSmSection() {
            var aboutSmScena = new ScrollMagic.Scene({
                triggerElement: $caseAboutSm[0],
                triggerHook: 0.5,
                // offset: -150,
                reverse: false
            })
            // .addIndicators({name: "AboutSm"})
                .setTween(
                    new TimelineMax()
                        .from($caseAboutSm.find('.CaseTitle'), 0.5, {opacity: 0, yPercent: 50})
                        .from($caseAboutSm.find('.CaseParagraph:first-child'), 0.5, {opacity: 0, yPercent: 100}, '-=0.3')
                        .from($caseAboutSm.find('.CaseAboutSm-img img'), 0.5, {scale: 0})
                        .from($caseAboutSm.find('.CaseAboutSm-img .location svg'), 0.5, {opacity: 0, yPercent: -50})
                        .from($caseAboutSm.find('.CaseAboutSm-img .location p, .CaseAboutSm-img .location span '), 0.5, {opacity: 0, yPercent: -40}, '-=0.3')
                        .from($caseAboutSm.find('.CaseParagraph:last-child'), 0.5, {opacity: 0, yPercent: 100}, '+=0.3')
                )
                .addTo(controller)
        }
        function setupClientSection() {
            var timeLine = new TimelineMax();
            var clientScena = new ScrollMagic.Scene({
                triggerElement: $caseClient[0],
                triggerHook: 0.5,
                reverse: false
            });

            switch (breakpoint) {
                case BREAK_POINTS.DESKTOP: {
                    timeLine
                        .from($caseClient.find('.ribbon'), 1, { xPercent: '-100%'})
                        .from($caseClient.find('.CaseParagraph'), 0.5, { opacity: 0}, '-=0.6')
                        .to($caseClient.find('.mask'), 2.5, {yPercent: "500px"}, '-=0.8')
                        .to($caseClient.find('.CaseClient-img img'), 0.5, {boxShadow: "0 4px 18px 0 rgba(0, 0, 0, 0.12)"}, '-=1.5');
                    break;
                }

                case BREAK_POINTS.TABLET: {
                    timeLine
                        .from($caseClient.find('.ribbon'), 1, { xPercent: '-100%'})
                        .from($caseClient.find('.CaseParagraph'), 0.5, { opacity: 0}, '-=0.6')
                        .to($caseClient.find('.mask'), 2.5, {yPercent: "500px"}, '-=1')
                        .to($caseClient.find('.CaseClient-img img'), 0.5, {boxShadow: "0 4px 18px 0 rgba(0, 0, 0, 0.12)"}, '-=1.5');
                    break;
                }

                case BREAK_POINTS.MOBILE: {
                    timeLine
                        .to($caseClient.find('.mask'), 2.5, {yPercent: "500px"})
                        .to($caseClient.find('.CaseClient-img img'), 0.3, {boxShadow: "0 4px 18px 0 rgba(0, 0, 0, 0.12)"}, '-=1.5')
                        .from($caseClient.find('.ribbon'), 0.7, { xPercent: '-100%'}, '-=2')
                        .from($caseClient.find('.CaseParagraph'), 0.5, { opacity: 0}, '-=1.3');
                    break;
                }
            }

            clientScena
                .setTween(timeLine)
                .addTo(controller);
        }
        function setupOpportunitiesSection() {
            var opportScena = new ScrollMagic.Scene({
                triggerElement: $caseOpport[0],
                triggerHook: 0.6,
                offset: -100,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($caseOpport.find('.CaseTitle'), 1, {opacity: 0, yPercent: 100})
                        .staggerFrom($caseOpport.find('.CaseSimpleList > *'), 0.7, {opacity: 0, yPercent: 100}, 0.3, '-=0.3')
                )
                .addTo(controller)
        }
        function setupMotivatingSection() {
            var motivScena = new ScrollMagic.Scene({
                triggerElement: $caseMotiv[0],
                triggerHook: 0.6,
                offset: -100,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($caseMotiv.find('.CaseLabel'), 0.6, {opacity: 0, yPercent: 40})
                        .from($caseMotiv.find('.CaseTitle'), 1, {opacity: 0, yPercent: 40 }, '-=0.5')
                        .from($caseMotiv.find('.CaseArticle '), 1, {opacity: 0, yPercent: 40}, '-=0.5')
                )
                .addTo(controller)
        }
        function setupBuildingSection() {
            var buildScena = new ScrollMagic.Scene({
                triggerElement: $caseBuild[0],
                triggerHook: 0.6,
                offset: -100,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($caseBuild.find('.CaseLabel'), 0.6, {opacity: 0, yPercent: 40})
                        .from($caseBuild.find('.CaseTitle'), 1, {opacity: 0, yPercent: 40}, '-=0.5')
                        .from($caseBuild.find('.CaseArticle '), 1, {opacity: 0, yPercent: 40}, '-=0.6')
                )
                .addTo(controller)
        }
        function setupEnsuringSection() {
            var ensureScena = new ScrollMagic.Scene({
                triggerElement: $caseEnsure[0],
                triggerHook: 0.6,
                offset: -100,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($caseEnsure.find('.CaseLabel'), 0.6, {opacity: 0, yPercent: 40})
                        .from($caseEnsure.find('.CaseTitle'), 1, {opacity: 0, yPercent: 40}, '-=0.5')
                        .from($caseEnsure.find('.CaseArticle '), 1, {opacity: 0, yPercent: 40}, '-=0.5')
                )
                .addTo(controller)
        }
        function setupOnboardSection() {
            var onboardScena = new ScrollMagic.Scene({
                triggerElement: $caseOnboard[0],
                triggerHook: 0.6,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($caseOnboard.find('.CaseSubTitle'), 1, {opacity: 0, yPercent: 60})
                        .from($caseOnboard.find('.CaseParagraph'), 1, {opacity: 0, yPercent: 40} , '-=0.3')
                        .from($caseOnboard.find('.CaseInfo-img '), 1, {opacity: 0, yPercent: 10 }, '-=0.3')
                        .from($caseOnboard.find('.halfScreenImg '), 1, {opacity: 0, xPercent: 100 }, '-=0.3')
                )
                .addTo(controller)
        }
        function setupDiscountSection() {
            var discountScena = new ScrollMagic.Scene({
                triggerElement: $caseDiscount[0],
                triggerHook: 0.5,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($caseDiscount.find('.CaseSubTitle'), 1, {opacity: 0, yPercent: 60})
                        .from($caseDiscount.find('.CaseParagraph'), 1, {opacity: 0, yPercent: 40} , '-=0.5')
                        .from($caseDiscount.find('.CaseHalfContent-img'), 1.2, {opacity: 0, xPercent: 20 }, '-=1')
                        .from($caseDiscount.find('.CaseHalfContent-tablet--img'), 1, {opacity: 0, yPercent: 10 }, '-=0.3')
                        .from($caseDiscount.find('.halfScreenImg '), 1, {opacity: 0, xPercent: 100 }, '-=0.3')
                )
                .addTo(controller)
        }
        function setupMeasuringSection() {
            var measuringScena = new ScrollMagic.Scene({
                triggerElement: $caseMeasuring[0],
                triggerHook: 0.6,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($caseMeasuring.find('.CaseSubTitle'), 1, {opacity: 0, yPercent: 60})
                        .from($caseMeasuring.find('.CaseParagraph'), 1, {opacity: 0, yPercent: 40} , '-=0.3')
                        .from($caseMeasuring.find('.CaseInfo-img '), 1, {opacity: 0, yPercent: 10 }, '-=0.3')
                        .from($caseMeasuring.find('.CaseInfo-tablet--img '), 0.5, {opacity: 0, yPercent: 10 }, '-=1')
                )
                .addTo(controller)
        }
        function setupImplementSection() {
            var implementScena = new ScrollMagic.Scene({
                triggerElement: $caseImplement[0],
                triggerHook: 0.5,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($caseImplement.find('.CaseSubTitle'), 1, {opacity: 0, yPercent: 60})
                        .from($caseImplement.find('.CaseParagraph'), 1, {opacity: 0, yPercent: 40} , '-=0.5')
                        .from($caseImplement.find('.CaseHalfContent-img'), 1.5, {opacity: 0, xPercent: 100 }, '-=1')
                        .from($caseImplement.find('.CaseHalfContent-tablet--img'), 1, {opacity: 0, yPercent: 10 }, '-=0.3')
                )
                .addTo(controller)
        }
        function setupFiltersSection() {
            var filterScena = new ScrollMagic.Scene({
                triggerElement: $caseFilters[0],
                triggerHook: 0.5,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($caseFilters.find('.CaseSubTitle'), 1, {opacity: 0, yPercent: 60})
                        .from($caseFilters.find('.CaseParagraph'), 1, {opacity: 0, yPercent: 40} , '-=0.5')
                        .from($caseFilters.find('.CaseHalfContent-img'), 1.5, {opacity: 0, xPercent: -100 }, '-=1')
                        .from($caseFilters.find('.CaseHalfContent-tablet--img'), 1, {opacity: 0, yPercent: 10 }, '-=0.3')
                )
                .addTo(controller)
        }
        function setupSimilarSection() {
            var similartScena = new ScrollMagic.Scene({
                triggerElement: $casePart[0],
                triggerHook: 0.5,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($casePart.find('.first-row .CaseSubTitle'),1, {opacity: 0, yPercent: 60})
                        .from($casePart.find('.first-row .CaseParagraph'), 1, {opacity: 0, yPercent: 40} , '-=0.5')
                        .from($casePart.find('.first-row img'), 0.7, {opacity: 0, yPercent: 30 }, '-=2')
                        .from($casePart.find('.last-row .CaseSubTitle'), 1, {opacity: 0, yPercent: 60}, '+=0.3')
                        .from($casePart.find('.last-row .CaseParagraph'), 1, {opacity: 0, yPercent: 40} , '-=0.5')
                        .from($casePart.find('.last-row img'), 0.7, {opacity: 0, yPercent: 30 }, '-=2')
                )
                .addTo(controller)
        }
        function setupResultSection() {
            var resultScena = new ScrollMagic.Scene({
                triggerElement: $caseResult[0],
                triggerHook: 0.5,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($caseResult.find('.CaseTitle'), 1, {opacity: 0, yPercent: 60})
                        .from($caseResult.find('.CaseParagraph'), 1, {opacity: 0, yPercent: 40} , '-=0.5')
                        .to($caseResult.find('img'), 1.5, {scale: 1.3}, '-=0.5')
                )
                .addTo(controller)
        }
        function setupTeamSection() {
            var teamScena = new ScrollMagic.Scene({
                triggerElement: $caseTeam[0],
                triggerHook: 0.6,
                reverse: false
            })
                .setTween(
                    new TimelineMax()
                        .from($caseTeam.find('.CaseTitle'), 1, {opacity: 0, yPercent: 60})
                        .staggerFrom($caseTeam.find('.CaseList > *'), 0.7, {opacity: 0, yPercent: 40}, 0.3, '-=0.3')
                )
                .addTo(controller)
        }

        function getBreakpoint() {
            if (width >= 1024) return BREAK_POINTS.DESKTOP;
            if (width >= 768 && width < 1024) return BREAK_POINTS.TABLET;
            if (width >= 320 && width < 768) return BREAK_POINTS.MOBILE;
        }
    });
});



