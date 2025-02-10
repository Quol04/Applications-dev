const programsMenu= document.querySelectorAll('.program')
const programDetail= document.querySelectorAll('.programDetail')


const removeActiveClass= () => {
    programsMenu.forEach(button => {
        button.classList.remove('active')
    })
}

programsMenu.forEach(program=> {
    program.addEventListener('click',() =>{
        removeActiveClass()
        if(program.classList.contains('express')){
            program.classList.add('active')
            programDetail.innerHTML =`
            <div class="container programDetail__container">
            <div class="programDetail__left">
            <h2>Express Learning</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ut alias non cumque fugiat nisi ab sunt eum.

            </p>
            <div class="programDetail__images">
                <div><img src="../assets/graduate4.jpg" alt=""></div>
                <div><img src="../assets/practical2" alt=""></div>
            </div>
            <h4>Included in Weekday Streams</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus in ad doloribus possimus accusantium, voluptatibus magnam saepe. Voluptatibus, hic sed fuga eligendi accusantium dolor exercitationem iure maiores!

            </p>
            <article>
                <h5>Theory</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>

            <article>
                <h5>practicals</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>

            <h4>Included in Weekday Streams</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus in ad doloribus possimus accusantium, voluptatibus magnam saepe. Voluptatibus, hic sed fuga eligendi accusantium dolor exercitationem iure maiores.
            </p>
            <article>
                <h5>Theory</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>
            <article>
                <h5>practicals</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>
            <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>

           
        </div>
        <div class="programDetail__right">
            <article>
                <h4>Regular Without License</h4>
                <div>
                    <h2>1,990</h2>
                    <p>For Non Students</p>
                </div>
                <div>
                    <h2>1,180</h2>
                    <p>For Students</p>
                </div>
            </article>

            <article>
                <h4>Regular With Standard License</h4>
                <div>
                    <h2>2,650</h2>
                    <p>For Non Students</p>
                </div>
                <div>
                    <h2>2,500</h2>
                    <p>For Students</p>
                </div>
            </article>

            <article>
                <h4>Regular With Premier License</h4>
                <div>
                    <h2>2,900</h2>
                    <p>For Non Students</p>
                </div>
                <div>
                    <h2>2,750</h2>
                    <p>For Students</p>
                </div>
                <p>License Will be ready 2Weeks after completion</p>
            </article>
            

        </div>
    </div>`
        } else if(program.classList.contains('polishing')){
            program.classList.add('active')
            programDetail.innerHTML =` <div class="container programDetail__container">
            <div class="programDetail__left">
            <h2>Regular Learning</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ut alias non cumque fugiat nisi ab sunt eum.

            </p>
            <div class="programDetail__images">
                <div><img src="../assets/graduate3.jpg" alt=""></div>
                <div><img src="../assets/practical8.jpeg" alt=""></div>
            </div>
            <h4>Included in Weekday Streams</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus in ad doloribus possimus accusantium, voluptatibus magnam saepe. Voluptatibus, hic sed fuga eligendi accusantium dolor exercitationem iure maiores!

            </p>
            <article>
                <h5>Theory</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>

            <article>
                <h5>practicals</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>

            <h4>Included in Weekday Streams</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus in ad doloribus possimus accusantium, voluptatibus magnam saepe. Voluptatibus, hic sed fuga eligendi accusantium dolor exercitationem iure maiores!
            </p>
            <article>
                <h5>Theory</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>
            <article>
                <h5>practicals</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>

            <h4>Included in Weekday Streams</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus in ad doloribus possimus accusantium, voluptatibus magnam saepe. Voluptatibus, hic sed fuga eligendi accusantium dolor exercitationem iure maiores.
            </p>
            <article>
                <h5>Theory</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>
            <article>
                <h5>practicals</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>
            <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>

           
        </div>
        <div class="programDetail__right">
            <article>
                <h4>Regular Without License</h4>
                <div>
                    <h2>1,990</h2>
                    <p>For Non Students</p>
                </div>
                <div>
                    <h2>1,180</h2>
                    <p>For Students</p>
                </div>
            </article>

            <article>
                <h4>Regular With Standard License</h4>
                <div>
                    <h2>2,650</h2>
                    <p>For Non Students</p>
                </div>
                <div>
                    <h2>2,500</h2>
                    <p>For Students</p>
                </div>
            </article>

            <article>
                <h4>Regular With Ppremier License</h4>
                <div>
                    <h2>2,900</h2>
                    <p>For Non Students</p>
                </div>
                <div>
                    <h2>2,750</h2>
                    <p>For Students</p>
                </div>
                <p>License Will be ready 2Weeks after completion</p>
            </article>
            

        </div>
    </div>`
        }else if(program.classList.contains('license')){
            program.classList.add('active')
            programDetail.innerHTML =` <div class="container programDetail__container">
            <div class="programDetail__left">
            <h2>Regular Learning</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ut alias non cumque fugiat nisi ab sunt eum.

            </p>
            <div class="programDetail__images">
                <div><img src="../assets/graduate3.jpg" alt=""></div>
                <div><img src="../assets/practical8.jpeg" alt=""></div>
            </div>
            <h4>Included in Weekday Streams</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus in ad doloribus possimus accusantium, voluptatibus magnam saepe. Voluptatibus, hic sed fuga eligendi accusantium dolor exercitationem iure maiores!

            </p>
            <article>
                <h5>Theory</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>

            <article>
                <h5>practicals</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>

            <h4>Included in Weekday Streams</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus in ad doloribus possimus accusantium, voluptatibus magnam saepe. Voluptatibus, hic sed fuga eligendi accusantium dolor exercitationem iure maiores!
            </p>
            <article>
                <h5>Theory</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>
            <article>
                <h5>practicals</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>

            <h4>Included in Weekday Streams</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus in ad doloribus possimus accusantium, voluptatibus magnam saepe. Voluptatibus, hic sed fuga eligendi accusantium dolor exercitationem iure maiores.
            </p>
            <article>
                <h5>Theory</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>
            <article>
                <h5>practicals</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>
            <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>

           
        </div>
        <div class="programDetail__right">
            <article>
                <h4>Regular Without License</h4>
                <div>
                    <h2>1,990</h2>
                    <p>For Non Students</p>
                </div>
                <div>
                    <h2>1,180</h2>
                    <p>For Students</p>
                </div>
            </article>

            <article>
                <h4>Regular With Standard License</h4>
                <div>
                    <h2>2,650</h2>
                    <p>For Non Students</p>
                </div>
                <div>
                    <h2>2,500</h2>
                    <p>For Students</p>
                </div>
            </article>

            <article>
                <h4>Regular With Ppremier License</h4>
                <div>
                    <h2>2,900</h2>
                    <p>For Non Students</p>
                </div>
                <div>
                    <h2>2,750</h2>
                    <p>For Students</p>
                </div>
                <p>License Will be ready 2Weeks after completion</p>
            </article>
            

        </div>
    </div>`
        } else{
            program.classList.add('active')
            programDetail.innerHTML =` <div class="container programDetail__container">
            <div class="programDetail__left">
            <h2>Regular Learning</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ut alias non cumque fugiat nisi ab sunt eum.

            </p>
            <div class="programDetail__images">
                <div><img src="../assets/graduate3.jpg" alt=""></div>
                <div><img src="../assets/practical8.jpeg" alt=""></div>
            </div>
            <h4>Included in Weekday Streams</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus in ad doloribus possimus accusantium, voluptatibus magnam saepe. Voluptatibus, hic sed fuga eligendi accusantium dolor exercitationem iure maiores!

            </p>
            <article>
                <h5>Theory</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>

            <article>
                <h5>practicals</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>

            <h4>Included in Weekday Streams</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus in ad doloribus possimus accusantium, voluptatibus magnam saepe. Voluptatibus, hic sed fuga eligendi accusantium dolor exercitationem iure maiores!
            </p>
            <article>
                <h5>Theory</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>
            <article>
                <h5>practicals</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>

            <h4>Included in Weekday Streams</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus in ad doloribus possimus accusantium, voluptatibus magnam saepe. Voluptatibus, hic sed fuga eligendi accusantium dolor exercitationem iure maiores.
            </p>
            <article>
                <h5>Theory</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>
            <article>
                <h5>practicals</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ad impedit voluptatibus, a quaerat totam dolores vitae exercitationem et tempore odio modi, error fugit nesciunt. Veritatis vero minus deleniti.</p>
            </article>
            <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>

           
        </div>
        <div class="programDetail__right">
            <article>
                <h4>Regular Without License</h4>
                <div>
                    <h2>1,990</h2>
                    <p>For Non Students</p>
                </div>
                <div>
                    <h2>1,180</h2>
                    <p>For Students</p>
                </div>
            </article>

            <article>
                <h4>Regular With Standard License</h4>
                <div>
                    <h2>2,650</h2>
                    <p>For Non Students</p>
                </div>
                <div>
                    <h2>2,500</h2>
                    <p>For Students</p>
                </div>
            </article>

            <article>
                <h4>Regular With Ppremier License</h4>
                <div>
                    <h2>2,900</h2>
                    <p>For Non Students</p>
                </div>
                <div>
                    <h2>2,750</h2>
                    <p>For Students</p>
                </div>
                <p>License Will be ready 2Weeks after completion</p>
            </article>
            

        </div>
    </div>`
        }
    })
})