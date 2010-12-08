$(document).ready( function() {
	$("<div/>").append(
		$("<pre/>").text( $("style#test_style").text() )
	).css("margin-top", "100px").appendTo($("body"));
} );
