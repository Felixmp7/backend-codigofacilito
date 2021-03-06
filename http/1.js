/*
  Verbos Http:

  Se refieren a los tipos de peticiones:
  GET,
  POST,
  DELETE,
  PUT,
  HEAD ...

  Http con Curl:

  Una petición http está compuesta por:
  1. Método o Verbos http 
  2. Versión del protocolo
  3. Ruta de la petición
  4. (Opcional) Cuerpo de datos a enviar.

  solicitud a una web con curl => curl http://google.com --verbose

  Una dirección web para hacer una solicitud con Http puede verse de alguna de las siguientes maneras:

  localhost:8080

  google.com

  web.facebook.com

  codigofacilito.com/cursos

  Todas son direcciones válidas y cada una tiene elementos distintos. Lo que aparece al principio, 
  justo antes de los dos puntos en el primer ejemplo, y en el caso de google.com, se trata del nombre de dominio.

  El nombre de dominio nos permite identificar la computadora en la que se encuentra el recurso 
  que estamos solicitando, nota como en lugar de página estamos usando el concepto de recurso,
  porque así como podemos solicitar una página, también puede ser otro tipo de archivo como una imagen.

  Luego del nombre de dominio viene el puerto, en el primer ejemplo el puerto es el 8080, es el que aparece
  luego de los dos puntos. En el resto de los ejemplos se asume el puerto por defecto, porque no hay otro
  especificado. El puerto por defecto para el protocolo Http es el puerto 80, y es el que precisamente se usa 
  cuando no se especifica otro, como en los ejemplos mencionados.

  Además del dominio y el puerto, una dirección web contiene la ruta o el path en donde se encuentra 
  el recurso, dentro del servidor. Piensa en que si el dominio fuera una colonia, el path sería la ruta para
  llegar a una casa en específico, ya que si bien el dominio representa al servidor, el path representa el
  recurso en específico que queremos.

  El path por defecto es la /, misma que puede omitirse por lo que asumimos que si no hay path,
  estamos tratando de acceder al inicio, la /. En nuestros ejemplos de direcciones,
  el path es siempre / con excepción del último donde se indica que buscamos el recurso con la ruta /articulos.

*/