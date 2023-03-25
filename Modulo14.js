public class Main {
    public static void main(String[] args) {
        System.out.println(10 + 15);
        System.out.println("10" + 2);
        System.out.println(Integer.parseInt("10") * 2);
        System.out.println(Integer.parseInt("10") / 3);
        System.out.println(Integer.parseInt("10") % 3);
        System.out.println(10 + (true ? 1 : 0));
        System.out.println(10 == Integer.parseInt("10"));
        System.out.println(10 == Integer.parseInt("10"));
        System.out.println(10 < 11);
        System.out.println(10 > 12);
        System.out.println(10 <= 10.1);
        System.out.println(10 > 9.99);
        System.out.println(10 != Integer.parseInt("dez"));
        System.out.println(10 + (true ? 1 : 0));
        System.out.println("dez" + true);
        System.out.println(10 + (false ? 1 : 0));
        System.out.println(10 * (false ? 1 : 0));
        System.out.println((true ? 1 : 0) + (true ? 1 : 0));

        int x = 10;
        int y = 10;
        System.out.println(x++);
        System.out.println(y--);

        System.out.println(1 & 1);
        System.out.println(1 & 0);
        System.out.println(0 & 0);
        System.out.println(1 & 0);
        System.out.println(0 / 1);

        String branco = "preto";
        String preto = "cinza";
        String cinza = "branco";
        String carro = "preto";
        int valor = 30000;
        int prestacao = 750;

        //a) branco == “branco”
        System.out.println(branco.equals("branco"));

        //b) branco == cinza
        System.out.println(branco.equals(cinza));

        //c) carro === branco
        System.out.println(carro.equals(branco));

       //d) var cavalo = carro == “preto” ? “cinza” : “marron”;
    String cavalo = carro.equals("preto") ? "cinza" : "marron";
       // cavalo é igual a "cinza"
    }
}