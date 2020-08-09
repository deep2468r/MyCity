function filter_by_type()
{
    var s_type = document.getElementById( "select_option" ).value;

    var s_cards = document.getElementsByClassName( "s_card" );

    for( let i=0; i<s_cards.length; i++ )
    {
        let c_arr = s_cards[i].getAttribute( "class" ).split(" ");

        if( c_arr.includes( s_type ) )
        {
            s_cards[i].style.display = "block";
        }
        else
        {
            s_cards[i].style.display = "none";
        }
    }
}


function filter_by_name()
{
    var search_name = document.getElementById( "name_search" ).value;

    var s_cards = document.getElementsByClassName( "s_card" );

    for( let i=0; i<s_cards.length; i++ )
    {
        let s_card_name = s_cards[i].getElementsByClassName("description")[0].getElementsByClassName("name")[0].innerHTML;

        if( s_card_name.includes( search_name ) || search_name.includes( s_card_name ) )
        {
            s_cards[i].style.display = "block";
        }
        else
        {
            s_cards[i].style.display = "none";
        }
    }
}