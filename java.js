	var grid = new Array(9);
	function initialise(){
		for ( i = 0; i < grid.length; i++) {
			grid[i] = 0;
		}
	}
	function display_grid() {
		for ( i = 0,k=0; i < 3; i++) {
			for ( j = 0; j < 3; j++,k++) {
				//document.write(grid[k] + " " );
				//document.getElementById("demo").innerHTML = "grid[k] <br>";
			}
			document.write("<br>");
		}
	}
	function random_no(){
		return Math.floor(Math.random() * 9);
	}
	function check_win(){
		//1 means 1 win 2 means 2 win 0 means no win -1 means draw
		for (var i = 0; i < grid.length;i = i + 3 ) {
			if(grid[i] == grid[i+1] && grid[i] == grid[i+2])
			{
				if(grid[i] == 1)
					return 1;
				else if(grid[i] == 2)
				 return 2;
			}
		}
		for (var i = 0; i < 3; i++) {
			if(grid[i] == grid[i+3] && grid[i] == grid[i+6])
			{
				if(grid[i] == 1)
					return 1;
				else if(grid[i] == 2)
				 return 2;
			}
		}
		if(grid[0] == grid[4] && grid[0] == grid[8]){
			if(grid[0] == 1)
					return 1;
				else if(grid[0] == 2)
				 return 2;
		}
		if(grid[2] == grid[4] && grid[2] == grid[6]){
			if(grid[2] == 1)
					return 1;
				else if(grid[2] == 2) return 2;
		}
		for (var i = 0; i < grid.length; i++) {
			if(grid[i] == 0)
				return 0;
		}
		return -1;

	}