$(function(){
    // hide and show section
    $('.questions-header-block h2, .questions-list h2').click((event) => {
        $('.question-and-answer').removeClass('active mobile-active mobile-inactive')
        $('.questions-header-block h2, .questions-list h2').removeClass('active')
        let section = "#" + $(event.currentTarget).data('section');
        $(event.currentTarget).addClass('active mobile-active')
        $('.question-individual-section-container .questions-list, .question-and-answer-container').removeClass('active mobile-active')
        $(section).addClass('active mobile-active')
        $(section).find('.question-and-answer-container').addClass('mobile-active')
        // for mobile
        $(event.currentTarget).parents('.questions-list').find('.toggle-questions-list').show()
    })
    // show answer
    $('.question-and-answer .question').click((event) => {
        $('.question-and-answer').removeClass('active mobile-active mobile-inactive')
        $(event.currentTarget).parent('.question-and-answer').siblings().addClass('mobile-inactive')
        $(event.currentTarget).parent('.question-and-answer').addClass('active mobile-active')
        // for mobile
        $(event.currentTarget).parents('.questions-list').find('.toggle-questions-list').hide()
    })
    // Toggle question list  only for mobile
    $('.toggle-questions-list').click((event) => {
        let parentElem = $(event.currentTarget).parent('.questions-list')
        $(parentElem).removeClass('active mobile-active')
        $(parentElem).find('h2').removeClass('active mobile-active')
        $(parentElem).find('.question-and-answer-container').removeClass('active mobile-active')
    })
    // Toggle question only for mobile
    $('.toggle-question-and-answer').click((event) => {
        $(event.currentTarget).parents('.questions-list').find('.toggle-questions-list').show()
        $(event.currentTarget).parents('.question-and-answer-container').find('.question-and-answer').removeClass('active mobile-active mobile-inactive')
    })
});