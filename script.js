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
        var $contact = $('.contact');
        var $blog = $('.blog');

        init();

        function init() {
            TweenMax.defaultEase = CircIn;
            TimelineMax.defaultEase = CircIn;
            // init slides containers

            setupHomeSection();
            setupAdvantagesSection();
            setupActivitySection();
            setupProjectSection();
            setupContactSection();
            setupBlogSection();
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
                reverse: true
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
                reverse: true
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
                reverse: true
            })
                .setTween(
                    new TimelineMax()
                        .from($projects.find('.subTitle '), 0.7, { opacity: 0, xPercent: -60})
                        .staggerFrom($projects.find('.projectList .row > *'), 1, {opacity: 0, xPercent: -5}, 0.3)
                        .from($projects.find('.toProject '), 0.5, { opacity: 0, xPercent: -5})
                        .from($projects.find('.quote '), 0.5,  { opacity: 0, scale: 0.5}, '+=0.3')
                )
                .addTo(controller)
        }
        function setupContactSection() {
            var contactScene = new ScrollMagic.Scene({
                triggerElement: $contact[0],
                triggerHook: 0.5,
                // offset: -150,
                reverse: true
            })
                .setTween(
                    new TimelineMax()
                        .from($contact.find('.titleBlock '), 0.7, { height: 0, padding: 0})
                        .from($contact.find('.formContent '), 0.5, { opacity: 0})
                        .from($contact.find('input[type="submit"] '), 0.5,  { opacity: 0, scale: 0.5}, '+=0.3')
                )
                .addTo(controller)
        }
        function setupBlogSection() {
            var blogScene = new ScrollMagic.Scene({
                triggerElement: $blog[0],
                triggerHook: 0.5,
                reverse: true
            })
                .setTween(
                    new TimelineMax()
                        .from($blog.find('.blogTitle '), 0.7, { opacity: 0, xPercent: -20})
                        .staggerFrom($blog.find('.blogList-wrapper > *'), 1, {opacity: 0, xPercent: -5}, 0.3)
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



