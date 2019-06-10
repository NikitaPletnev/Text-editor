//Окно истории изменений по времени
$(document).ready(function(){
	//Проверка элементов в локальном харнилище
   if (localStorage.length !== 0){
   	localStorage.removeItem('Стандартный');
   	$('.changeStack').css({'display':'block'});
   	let arr = [];
   	//Перебор массива для хронологически правильной последовательности в списке истории изменений
   	for (var key in localStorage){
     arr.push(key);
    };
    for(let i = 0; i< arr.length - 6; i++){
    	arr.splice(-6);
    };
    arr.sort();
    for(let j = 0; j < arr.length; j++){
    	//Промежуточная переменная для удобства
    	let g = '';
    	g+='<div class = changeItem>' + arr[j] + '</div>';
    	//Добавление информации в блок с историей изменений
      if(arr[j] !== 'clear' && arr[j] !== 'getItem' && arr[j] !== 'key' && arr[j] !== 'length' && arr[j] !== 'removeItem' && arr[j] !== 'setItem'){
        $('.changeStack').append(g);
      }
    	
    };
    //Логика кнопок для отображения текста из локального хранилища
    $('.changeItem').on('click',function(){
    	if($(this).text() != 'Стандартный'){
    		//Промежуточная переменная для удобства
    		let r = localStorage.getItem($(this).html());
    		$('.content').html(r);
    		$('.changeStack').css({'display':'none'});
    	}else{
    		$('.changeStack').css({'display':'none'});
    	}
     });
   }else{
   	        //Убрать окно , когда оно не нужно
    		$('.changeStack').css({'display':'none'});
    		//Промежуточная переменная для удобства
    		let a = $('.content').text();
    		localStorage.setItem('Стандартный',a);
    		console.log(localStorage)
    	};
});

//Логика кнопки "Редактировать"
$(document).ready(function(){
   $('.RedBut').on('click',function(){
   	//Изменение атрибута для возможности редактирования
      $('.content').attr('contenteditable',true);
      //Изменение функциональности кнопок
      $('.RedBut').attr('disabled','disabled');
      $('.SaveBut').removeAttr('disabled');
       $('.CansBut').removeAttr('disabled');
//Изменение цветов при выделении
       $('.content').on('mouseup',function(){
    let y = "";
    y += '<div class = "color_text"><h4>Выберите цвет текста</h4>';
    y +='<div class = "red"></div>';
    y +='<div class = "blue"></div>';
    y +='<div class = "brown"></div>';
    y +='<div class = "green"></div>';
    y +='<div class = "yellow"></div>';
    y +='<div class = "black"></div>';
    y += '</div>';
    $('.contaner').append(y);
    let range = $.selection().get().html;
    let h = '';
    h+='<div id = "color">' + range + '</div>';
    //Сохранение измененного текста
    $.selection().set(h);
//Изменение цветов текста
$('.red').on('click',function(){
  $('#color').css({'color':'red'});
});

$('.blue').on('click',function(){
  $('#color').css({'color':'blue'});
});

$('.blue').on('click',function(){
  $('#color').css({'color':'blue'});
});

$('.brown').on('click',function(){
  $('#color').css({'color':'brown'});
});

$('.green').on('click',function(){
  $('#color').css({'color':'green'});
});

$('.yellow').on('click',function(){
  $('#color').css({'color':'yellow'});
});

$('.black').on('click',function(){
  $('#color').css({'color':'black'});
});
      });
   });
});

//Логика кнопки "Сохранить"
$(document).ready(function(){
	$('.SaveBut').on('click', function(){
		//Изменение атрибута для отмены редактирования 
		$('.content').attr('contenteditable',false);
		//Изменение функциональности кнопок
		 $('.RedBut').removeAttr('disabled');
		 $('.SaveBut').attr('disabled','disabled');
		 $('.CansBut').attr('disabled','disabled');
		 let newContent = $('.content').html();
		 let newDate = new Date;
		 localStorage.setItem(newDate,newContent);
//Удаление окна с выбором цветов
      $('.color_text').remove();
	});
});

//Логика кнопки "Отмена"
$(document).ready(function(){
	$('.CansBut').on('click',function(){
	//Изменение атрибута для отмены редактирования 
	$('.content').attr('contenteditable',false);
	//Проверка на заполненность локального хранилища
	if(localStorage.length !== 0){
		let arr2 = [];
//Перебор массива для возвращения последнего сохранения
   	for (var key in localStorage){
     arr2.push(key);
    };
    for(let i = 0; i< arr2.length - 6; i++){
    	arr2.splice(-6);
    };
    arr2.sort();
    //Промежуточная переменная для удобства
    let k = localStorage.getItem(arr2[arr2.length-1]);
    $('.content').html(k);
	//Изменение функциональности кнопок
	$('.RedBut').removeAttr('disabled');
    $('.SaveBut').attr('disabled','disabled');
    $('.CansBut').attr('disabled','disabled');	
   }else{
   	//Промежуточная переменная для удобства
   	let m = localStorage.getItem('Стандартный');
   	$('.content').html(m);
   }
  });
});

$(document).ready(function(){
  
});


