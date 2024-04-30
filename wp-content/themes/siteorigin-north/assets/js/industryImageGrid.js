jQuery(function ($) {

    const industryImageCaptions = [
        "Minimum Viable Product",
        "Custom Blockchain Solutions",
        "Industrial Solutions",
        "Proof-of-Concept",
        "Custom Blockchain Solutions"
    ];

    const industryImageTitles = [...industryImageCaptions];

    const industryImageDesc = [
        'Test your business idea feasibility with MVP (Minimum Viable Product) development enabled by our blockchain experts, writers, and designers',
        'Get specific functionality tailored to your needs. Our custom-fit solutions are backed by thorough business analysis and seamless integration',
        'Get specific functionality tailored to your needs. Our custom-fit solutions are backed by thorough business analysis and seamless integration',
        'Explore the application and feasibility of blockchain technology in your business concept with our blockchain PoC development',
        ''
    ];

    let i = j = k = 0;
    $(".industry-img-grid .sow-image-grid-wrapper").children()
        .each(function () {
            // console.log($(this))
            // $(this).append(`<div class='title-desc'><h5>${industryImageTitles[j++]}</h5><p>${industryImageDesc[k++]}</p></div>`);
            $(this).append(`<p class='industry-img-caption'>${industryImageCaptions[i++]}</p>`);
        });

        // $(".industry-img-grid img").hover(function(){  
        //     $('.industry-img-grid .title-desc').css("display", "block");
        //     }, function(){
        //     $('.industry-img-grid .title-desc').css("display", "none");
        // });


});