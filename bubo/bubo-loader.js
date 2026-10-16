/* =====================================================
   BUBO LOADER
   Loads Bubo into any page
===================================================== */

async function loadBubo(containerSelector) {

    const container =
        document.querySelector(containerSelector);

    if (!container) {

        console.error(
            "Bubo: Container not found."
        );

        return;

    }


    try {

        const response =
            await fetch("bubo/bubo.html");


        if (!response.ok) {

            throw new Error(
                "Could not load Bubo HTML."
            );

        }


        const html =
            await response.text();


        container.innerHTML =
            html;


        /* Initialize Bubo */

        Bubo.init(
            containerSelector
        );


        console.log(
            "🦉 Bubo loaded successfully!"
        );


    } catch (error) {

        console.error(
            "Bubo loading error:",
            error
        );

    }

}