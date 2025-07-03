// newsletter.js
import { createClient } from "https://esm.sh/@supabase/supabase-js";

// Dados do seu projeto Supabase
const supabaseUrl = "https://xiohaaukwznukeqkwbsy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpb2hhYXVrd3pudWtlcWt3YnN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NjAyNDcsImV4cCI6MjA2NzEzNjI0N30.NOuncFjR5uhMRgtBN2gD5HLCXjcDdGNklxnKWfxl63E";
const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll(".newsletter-form");

    forms.forEach((form) => {
        const input = form.querySelector("#newsletterEmail");

        if (!input) return;

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = input.value.trim();

            if (!email) {
                alert("Por favor, digite um e-mail.");
                return;
            }

            const { error } = await supabase
                .from("newsletter")
                .insert([{ email }]);

            if (error) {
                alert("Erro ao se inscrever.");
                console.error(error);
            } else {
                alert("Inscrição realizada com sucesso!");
                form.reset();
            }
        });
    });
});
