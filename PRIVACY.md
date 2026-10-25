
---

## `PRIVACY.md`

```markdown
# Política de privacidad · Re‑Late

## Responsable del tratamiento
La propia persona usuaria. **No existe encargado de tratamiento, servidor ni cesión a terceros.**

## Datos tratados (todos en el dispositivo)
Estados de ánimo, ansiedad, energía, sueño, consumo de tabaco, días con depresión y síntomas,
grado de ideación autolítica, constantes vitales, registros TCC, tareas, citas, mensajes
(cifrados de extremo a extremo), plan de seguridad y consentimiento informado.

## Base jurídica
Consentimiento explícito para datos de salud: **art. 9.2.a RGPD**.
El consentimiento es revocable en cualquier momento con el borrado total de datos.

## Cifrado
PBKDF2‑SHA256 (150.000 iteraciones) → AES‑256‑GCM. La clave no se almacena en ningún sitio:
se deriva de la contraseña maestra en el instante del desbloqueo. Sin contraseña, los datos
son irrecuperables (diseño de mínimo conocimiento).

## Ubicación
Se obtiene **únicamente** cuando la persona pulsa el botón, sin histórico y sin seguimiento en
segundo plano. Solo se comparte si la persona copia, comparte o marca «guardar en el registro».
El visor de mapa es OpenStreetMap, sin rastreo publicitario.

## Cookies y rastreo
Ninguna. Sin analítica, sin publicidad, sin SDK de terceros, sin peticiones de red durante el uso.

## Derechos y cómo ejercerlos
- **Acceso y portabilidad:** «Privacidad → Exportar mis datos (JSON / CSV)».
- **Supresión:** «Privacidad → Borrar todo» elimina `localStorage` por completo.
- **Oposición / limitación:** basta con desinstalar la app y limpiar los datos del navegador.

## Menores de edad
Este proyecto no está diseñado para menores sin la intervención de su familia o del profesional
responsable. En caso de riesgo grave, el contacto inmediato es **024** o **112**.

## Contactos de ayuda
- **024** · Línea de atención para la conducta suicida (24 h, gratuita, confidencial).
- **112** · Emergencias.
- **976 232 828** · Teléfono de la Esperanza, Aragón.

## Referencias normativas
AEPD: guía para profesionales del sector sanitario, nota técnica sobre aplicaciones móviles y
guía para pacientes y usuarios.

## Informes y PDF
El informe se compone localmente; el PDF resultante **no está cifrado**. Se recomienda guardarlo
en una carpeta protegida del dispositivo, no enviarlo por correo a terceros y entregarlo
únicamente al profesional sanitario responsable. Los cuestionarios PHQ‑9 y GAD‑7 son
instrumentos de autoinforme: no constituyen diagnóstico.
