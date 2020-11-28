function show(button)
	{
		if (button == 'left')
		{
			document.getElementById('dog').style.visibility = 'hidden';
			document.getElementById('right').style.width = '5%';
			document.getElementById('cat').style.visibility = 'visible';
			document.getElementById('cat').style.width = 'auto';
			document.getElementById('left').style.width = '95%';
		}
		if (button == 'right')
		{
			document.getElementById('cat').style.visibility = 'hidden';
			document.getElementById('left').style.width = '5%';
			document.getElementById('dog').style.visibility = 'visible';
			document.getElementById('dog').style.width = 'auto';
			document.getElementById('right').style.width = '95%';
		}
		if (button == 'both')
		{
			document.getElementById('dog').style.visibility = 'visible';
			document.getElementById('dog').style.width = '90%';
			document.getElementById('right').style.width = '50%';
			document.getElementById('cat').style.visibility = 'visible';
			document.getElementById('cat').style.width = '90%';
			document.getElementById('left').style.width = '50%';
		}
	}
