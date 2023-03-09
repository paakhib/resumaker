
      // adding inputs to the form
      document.getElementById("add_s").addEventListener("click", function () {
        const new_input = document.createElement("input")
        new_input.setAttribute("type", "text");
        new_input.setAttribute("placeholder", "Add your Skill");
        new_input.classList.add("regular2", "s2", "all_boxes");   
        document.getElementById("s_form").appendChild(new_input);      
      });

      document.getElementById("add_i").addEventListener("click", function () {
        const new_input = document.createElement("input")
        new_input.setAttribute("type", "text");
        new_input.setAttribute("placeholder", "Add your Intern");
        new_input.classList.add("regular2", "i2", "all_boxes");   
        document.getElementById("i_form").appendChild(new_input);      
      });
      
      document.getElementById("add_l").addEventListener("click", function () {
        const new_input = document.createElement("input")
        new_input.setAttribute("type", "text");
        new_input.setAttribute("placeholder", "Languages you speak");
        new_input.classList.add("regular2", "l2", "all_boxes");   
        document.getElementById("l_form").appendChild(new_input);      
      });

      document.getElementById("add_p").addEventListener("click", function () {
        const new_input = document.createElement("input")
        new_input.setAttribute("type", "text");
        new_input.setAttribute("placeholder", "Project Link");
        new_input.classList.add("regular2", "p2", "all_boxes");   
        document.getElementById("p_form").appendChild(new_input);      
      });
      

      let a = document.querySelectorAll(".arrow1");
      let b = document.querySelectorAll(".acc1");
      for (let i = 0; i < a.length; i++) {
        a[i].addEventListener("click", function () {
          b[i].classList.toggle("active");
          a[i].classList.toggle("arw_clr");
          a[i].classList.toggle("rotate_it");
        });
      }

      // insert image
      window.addEventListener("load", function () {
        document
          .querySelector('input[type="file"]')
          .addEventListener("change", function () {
            if (this.files && this.files[0]) {
              let img = document.getElementById("user_image");
              let res_img = document.getElementById("res_image");
              img.src = URL.createObjectURL(this.files[0]);
              res_img.src = URL.createObjectURL(this.files[0]);
            }
          });
      });

      document
        .getElementById("preview")
        .addEventListener("click", function (e) {
          e.preventDefault();
          // personal info
          var name1 = document.getElementById("first_n").value;
          var name2 = document.getElementById("last_n").value;
          var p = document.getElementById("phone_no").value;
          var gmail = document.getElementById("email").value;
          var ad = document.getElementById("address").value;
          var title = document.getElementById("title").value;

          document.getElementById("f_name").innerHTML = name1 + " " + name2;
          document.getElementById("user_email").innerHTML = gmail;
          document.getElementById("user_no").innerHTML = p;
          document.getElementById("user_address").innerHTML = ad;
          document.getElementById("user_title").innerHTML = title;

          // education
          var sch = document.getElementById("sch_name").value;
          var ten = document.getElementById("class_10").value;
          var twelve = document.getElementById("class_12").value;
          var dur1 = document.getElementById("sch_dur").value;

          document.getElementById("user_sch").innerHTML = sch;
          document.getElementById("user_class10").innerHTML = ten;
          document.getElementById("user_class12").innerHTML = twelve;
          document.getElementById("user_sch_dur").innerHTML = dur1;

          var col = document.getElementById("col_name").value;
          var cour = document.getElementById("course").value;
          var dur2 = document.getElementById("col_dur").value;

          document.getElementById("user_col").innerHTML = col;
          document.getElementById("user_course").innerHTML = cour;
          document.getElementById("user_col_dur").innerHTML = dur2;

        

          // skills, languages, projects, interns
          let t = "";
          let intern = document.querySelectorAll(".i2");
          if (intern[0].value)
          {
            document.getElementById("education").nextElementSibling.innerHTML = "<div class='parent'> <span class='label'> INTERNS </span> <div id='user_intern'></div> </div>"
          }
            for (let i = 0; i < intern.length; i++) { 
              if (intern[i].value) 
              {t = t + intern[i];
              document.getElementById("user_intern").innerHTML +=
                `<div class="text i1"> ${intern[i].value} </div>`;}
          };

          let t1 = "";
          let skill = document.querySelectorAll(".s2");
          if (skill[0].value)
          {
            document.getElementById("display_skill").nextElementSibling.innerHTML = `<div class="details margin" >Skills</div>
          <div class="info" id="user_skill">
          </div>`;
          }
          for (let i = 0; i < skill.length; i++) {  
            if (skill[i].value) 
            {
              t1 = t1 + skill[i];
              document.getElementById("user_skill").innerHTML +=
                `<li class="space shift s1"> ${skill[i].value} </li>`;
            }
          };

          let t2 = "";
          let project = document.querySelectorAll(".p2");
          if (project[0].value)
          {
            document.getElementById("sib_proj").nextElementSibling.innerHTML = '<div class="parent"> <span class="label"> Projects </span> <div id="user_project"></div> </div>';
          }
          for (let i = 0; i < project.length; i++) {  
            if (project[i].value)
            {
              t2 = t2 + project[i];
            document.getElementById("user_project").innerHTML +=
              `<div class="text p1"> <a href="https://${project[i].value}" class="project_link"> ${project[i].value} </a> </div>`;
            }
            
          };

          let t3 = "";
          let language = document.querySelectorAll(".l2");
          if (language[0].value)
          {
            document.getElementById("display_lang").nextElementSibling.innerHTML = `<div class="details margin">Languages</div> 
            <div class="info" id="user_lang">
              </div>`;
          };
          for (let i = 0; i < language.length; i++) {  
            if (language[i].value)
            {t3 = t3 + language[i];
            document.getElementById("user_lang").innerHTML +=
              `<div class="space l1"> ${language[i].value} </div>`};
          };
        }


        );
        

      // preview of the resume

      document.getElementById("preview").addEventListener("click", function () {
        document.getElementById("bg").classList.remove("hide_it");
      });

      // downloading the resume

      let download = document.getElementById("download");
      download.addEventListener("click", function(e){
        e.preventDefault();
        html2canvas(document.getElementById("resume")).then(function(canvas){
          window.image=canvas.toDataURL("image/png");
          window.jsPDF=window.jspdf.jsPDF;

          let pdf = jsPDF("p", "in", [11.69, 8.27]);
          pdf.addImage(image, "PNG", 0, 0, 8.27, 11.69);
          pdf.save("resume.pdf");
        })
      });

      // going back to the editor

      let back= document.getElementById("back");
      back.addEventListener("click", function(){
        document.getElementById("bg").classList.add("hide_it");
      });
    