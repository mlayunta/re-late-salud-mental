# Re‑Late · Cuidado de la Salud Mental

Aplicación web progresiva (PWA) **local-first** para el seguimiento de la salud mental.
**Autor:** Miguel Ángel Layunta López · Zaragoza · 2026

> ⚠️ Herramienta de **seguimiento y autoobservación**. No diagnostica ni sustituye
> tratamiento psiquiátrico/psicológico. En riesgo vital inmediato: **112**.
> Ideación suicida: **024** (24 h, gratuito, confidencial).

## 1 · Qué hace

| Módulo | Contenido |
|---|---|
| **Diario** | Ánimo (1‑5), ansiedad (0‑10), energía, horas de sueño, cigarrillos, emociones y nota |
| **Calendario** | Mapa mensual de días con depresión por gravedad (sin síntomas · leve · moderada · grave · muy grave/riesgo) + síntomas |
| **Salud** | TA sistólica/diastólica y pulso con clasificación; tabaquismo (índice paquetes‑año); grado de ideación autolítica tipo C‑SSRS; geolocalización bajo demanda y botón 112 |
| **Gráficas** | Evolución de ánimo, ansiedad, energía, sueño, tabaco, depresión, ideación y TA; comparativa normalizada; media mensual de gravedad |
| **Histórico** | Línea de tiempo con **todas** las entradas, filtros por tipo/fechas/texto y exportación CSV |
| **TCC** | Registro de pensamientos con distorsiones y reevaluación; tareas del profesional |
| **Calma (SOS)** | Protocolo de 5 pasos, respiración 4‑7‑8 y caja, grounding 5‑4‑3‑2‑1, ayuda inmediata |
| **Sesión** | Videollamada cifrada, chat E2E y agenda con recordatorios |
| **Recursos** | Enlaces oficiales (024, Aragón, Teléfono de la Esperanza, AEPD) |
| **Privacidad** | Consentimiento informado digital, exportación JSON/CSV y borrado total |

## 2 · Privacidad y seguridad

- **Sin servidor, sin analítica, sin telemetría.** Todo vive en `localStorage` del dispositivo.
- Cifrado con **Web Crypto API**: PBKDF2‑SHA256 (150.000 iteraciones) → **AES‑256‑GCM**.
- La clave se deriva de la contraseña maestra y **nunca se guarda**: sin contraseña no hay recuperación posible.
- El *service worker* **no intercepta peticiones de otros orígenes**: 024, 112, OpenStreetMap y AEPD se abren por la red normal.
- Geolocalización **solo bajo acción explícita**, sin histórico ni segundo plano, y compartida únicamente si la persona lo provoca.
- Consentimiento informado digital con finalidades granulares (RGPD art. 7 y 9) y derechos efectivos (acceso, portabilidad, supresión).

## 3 · Referencias clínicas usadas

| Parámetro | Valor | Fuente |
|---|---|---|
| TA normal | < 120/80 mmHg | Sociedad Española de Hipertensión · MedlinePlus |
| TA elevada | 120‑129 y < 80 | SEH‑LESP |
| HTA grado 1 | 130‑139 o 80‑89 | SEH‑LESP |
| HTA grado 2 | ≥ 140/90 → aviso médico | SEH‑LESP |
| Pulso en reposo | 60‑100 ppm (orientativo) | — |
| Índice tabáquico | cigarrillos/día ÷ 20 × años fumando | práctica clínica estándar |
| Ideación autolítica | escala ordinal tipo **C‑SSRS** (Columbia, versión española) | cssrs.columbia.edu |

Ningún umbral sustituye el criterio clínico: la app **registra y avisa**, no diagnostica.

## 4 · Estructura del repositorio

