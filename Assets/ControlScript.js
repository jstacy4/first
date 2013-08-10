#pragma strict

var forward_speed : float = 3;
var turn_speed : float = 2;


function Start () {

}

function Update () 
{
    var forward_move_amount = Input.GetAxis( "Vertical" ) * forward_speed;
    var turn_move_amount = Input.GetAxis( "Horizontal" ) * turn_speed;

    transform.Rotate( 0, turn_move_amount, 0 );

    rigidbody.AddRelativeForce( -forward_move_amount, 0, 0 );
}