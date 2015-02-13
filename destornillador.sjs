macro resumen {
  rule { $x } => {
    console.log( $x );
  }
}


macro nsfw {
	rule { $x } => {
	  console.warn( $x );
	}
}


macro nadaquever {
  rule infix { $left | $right} => {
    $left !== $right
  }
}

macro emasomeno {
	rule infix {$left | $right} => {
		$left === $right
	}
}

macro cuantascopastenes {
  rule { $array } => {
    if($array.length){
      $array.length;
    }
    else{
      throw "la cagaste";
    }
  }
}


macro haceteamigo {
	rule infix {$array | $item} => {
		$array.push($item);
	}
}



