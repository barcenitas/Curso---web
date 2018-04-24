public class NumeroBinario{
	private int numeroDecimal;
	private String numeroBinario = "";
	private int unos;

	public NumeroBinario(int numero){
		this.numeroDecimal = numero;
		setNumeroBinario();
		this.unos = 0;
		for(int i = 0; i < numeroBinario.length(); i++){
			if(numeroBinario.charAt(i) == '1'){
				this.unos++;
			}
		}
	}

	private String convertirABinario(){
		int numAux = numeroDecimal;
		String numBinAux = "";
		while(numAux != 0){
			numBinAux += Integer.toString(numAux%2);
			numAux /= 2;
		}
		return numBinAux;
	}

	private void setNumeroBinario(){
		String numBinAux = convertirABinario(); 
		for(int i = numBinAux.length() - 1; i >= 0; i--){
			this.numeroBinario += numBinAux.charAt(i);
		}
	}

	public String getNumeroBinario(){
		return this.numeroBinario;
	}

	public int getUnos(){
		return this.unos;
	}
}