public class TestNumeroBinario{
	public static void main(String[] args) {
		NumeroBinario[] binarios = new NumeroBinario[args.length];

		for(int i = 0; i < args.length; i++){
			binarios[i] = new NumeroBinario(Integer.parseInt(args[i]));
		}

		for(int i = 0; i < binarios.length - 1; i++){
			for(int j = 0; j < binarios.length - 1; j++){
				if(binarios[j].getUnos() > binarios[j+1].getUnos()){
					NumeroBinario aux = binarios[j];
					binarios[j] = binarios[j+1];
					binarios[j+1] = aux;
				}
			}
		}

		for (int i = 0; i < binarios.length; i++) {
			System.out.print(binarios[i].getNumeroBinario());
			if(i < binarios.length -1 && binarios[i].getUnos() == binarios[i+1].getUnos()){
				System.out.print(", ");
			}
			else{
				System.out.println("\t(Hay " + binarios[i].getUnos() + " unos)");
			}
		}
		System.out.println();
	}
}