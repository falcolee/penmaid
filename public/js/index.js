 $(document).ready(function() {
     count = function() {
         setTimeout(function() {
             var val = $.trim($('#textBoxMain').val()), // Remove spaces from b/e of string
                 words = val.replace(/\s+/gi, ' ').split(' ').length, // Count word-splits
                 chars = val.length; // Count characters
             if (!chars) words = 0;
             totalWords = words;
             totalChars = chars;
             $("#totalWords, #num_word11, #num_word2").html(words.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
             $("#totalChar, #num_character1, #num_character2").html(chars.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
             $("input.words, input.words1").val(totalWords);
             $("input.chars, input.chars1").val(totalChars);
         }, 200);
     }
     remove_tags = function(html) {
         html = html.replace(/<br>/g, "$br$");
         html = html.replace(/(?:\r\n|\r|\n)/g, '$br$');
         var tmp = document.createElement("DIV");
         tmp.innerHTML = html;
         html = tmp.textContent || tmp.innerText;
         html = html.replace(/\s+/g, ' ').trim();
         html = html.replace(/\$br\$/g, "\n");
         return html;
     }
     $('#textBoxMain').keyup(function() {
         count();
     });
     $('#textBoxMain').change(function() {
         count();
     });
     $('#dropzone').click(function() {
         $(".textarea_bg").removeClass("textarea_bgg");
         $('.drag_area').hide('slow');
         $('#dropzone').css('z-index', '-1');
         $('#textBoxMain').focus();
     });

     $(".textarea_bg").focusin(function() {
         $(".textarea_bg").removeClass("textarea_bgg");
         $('.drag_area').hide('slow');
         $('#dropzone').css('z-index', '-1');
     });
     $(".textarea_bg").focusout(function() {
         if ($('.textarea_bg').val() == "") {
             $(".textarea_bg").addClass("textarea_bgg");
             $('.drag_area').show('slow');
             $('#dropzone').css('z-index', '10');
         }
     });
     $('#clear').click(function() {
         $('.textarea_bg').val('');
         $(".textarea_bg").addClass("textarea_bgg");
         $('.drag_area').show('slow');
         $('#textFile').val('');
         $('#totalChar').html(0);
         $('#totalWords').html(0);
         $('#dropzone').css('z-index', '10');
     });
     $(".textarea_bg").keyup(function() {
         if ($('.textarea_bg').val() != "") {
             $('#dropzone').css('z-index', '-1');
         } else {
             $('#dropzone').css('z-index', '10');
         }
     });
     $('#checkButton').click(function() {
         var lang = $('#language').val();
         var val = $.trim($('#textBoxMain').val()); // Remove spaces from b/e of string
         if (val.length < 3) {
             if (lang == "zh-Hant") {
                 alert("文本過短，請檢查");
             } else {
                 alert("文本过短，请检查");
             }
             return false;
         }
         val = remove_tags(val);
         var wordcount = val.replace(/\s+/gi, ' ').split(' ').length; // Count word-splits

         if (wordcount > 3000) {
             if (lang == "zh-Hant") {
                 alert("文本過長，請檢查");
             } else {
                 alert("文本过长，请检查");
             }

             return false;
         }
         $(".textarea_bg").removeClass("textarea_bgg");
         $('.drag_area').hide('slow');
         $("#plagform").submit()
     });
     $(function() {

         function preventDefaults(e) {
             e.preventDefault()
             e.stopPropagation()
         }
     });
 });