package daria.senyaninova.consultpro.exceptions;

public class PermissionDeniedError extends RuntimeException{
    public PermissionDeniedError(String message) {
        super(message);
    }
}
