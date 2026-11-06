# Guía y Diagnóstico de Alertas de Dependabot

Este documento explica en detalle qué es Dependabot, qué significan sus alertas de seguridad, el diagnóstico del estado actual de dependencias en este repositorio y los pasos recomendados para resolverlas de forma segura.

---

## 1. ¿Qué es Dependabot y qué son sus alertas?

**GitHub Dependabot** es un servicio automatizado integrado en GitHub que analiza periódicamente las dependencias de software declaradas en el repositorio (en este caso, en `package.json` y `package-lock.json`).

### ¿Cómo funciona?
1. **GitHub Advisory Database:** GitHub mantiene una base de datos global de vulnerabilidades de seguridad conocidas (CVEs y GHSAs).
2. **Detección continua:** Dependabot compara las versiones exactas instaladas en tu proyecto con dicha base de datos.
3. **Generación de alertas:** Si detecta que alguna biblioteca directa o indirecta (transitiva) posee una vulnerabilidad registrada, emite una **Alerta de Seguridad (Dependabot Alert)** clasificándola por severidad:
   - **Crítica (Critical):** Riesgo inminente de ejecución remota de código (RCE), escalada de privilegios o bypass total de autenticación.
   - **Alta (High):** Denegación de servicio severa (DoS), fugas de información o Cross-Site Scripting (XSS) grave.
   - **Moderada (Moderate):** Problemas explotables bajo condiciones particulares o con impacto limitado.
   - **Baja (Low):** Impacto mínimo o que requiere acceso privilegiado previo.
4. **Dependabot Security Updates:** Dependabot puede abrir automáticamente Pull Requests (PRs) con el cambio de versión mínimo necesario para parchear la vulnerabilidad sin romper compatibilidad siempre que sea posible.

---

## 2. Diagnóstico de Vulnerabilidades en este Proyecto

En la auditoría actual de dependencias se han detectado **45 vulnerabilidades** (4 Críticas, 16 Altas, 25 Moderadas).

A continuación se detallan los paquetes principales afectados:

### A. Dependencias Directas

1. **`next` (Severidad Crítica / Alta)**
   - **Versión instalada:** `15.5.15`
   - **Vulnerabilidades principales:**
     - *Crítica:* Unauthenticated Remote Code Execution en Image Optimization API al procesar archivos SVG y AVIF maliciosos ([GHSA-2464-fhr4-w9xw](https://github.com/advisories/GHSA-2464-fhr4-w9xw), [GHSA-2xp9-vwfh-vxw4](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4)).
     - *Crítica:* Unauthenticated Remote Code Execution en servidores Windows ([GHSA-p293-qw3h-jr36](https://github.com/advisories/GHSA-p293-qw3h-jr36)).
     - *Alta:* Server-Side Request Forgery (SSRF) en Server Actions y rewrites ([GHSA-89xv-2m56-2m9x](https://github.com/advisories/GHSA-89xv-2m56-2m9x), [GHSA-p9j2-gv94-2wf4](https://github.com/advisories/GHSA-p9j2-gv94-2wf4)).
     - *Alta:* Denial of Service (DoS) con Server Actions y componentes de caché.
     - *Moderada/Baja:* Cache Poisoning en App Router y páginas SSG/ISR.
   - **Solución:** Actualizar a `next@15.5.29` (o a la última versión del canal de seguridad `next@^15.5.29`).

2. **`postcss` (Severidad Alta)**
   - **Versión instalada:** `<=8.5.22`
   - **Vulnerabilidades:**
     - *Alta:* Path traversal y lectura arbitraria de archivos a través de `sourceMappingURL` controlado por atacantes en comentarios CSS ([GHSA-6g55-p6wh-862q](https://github.com/advisories/GHSA-6g55-p6wh-862q), [GHSA-r28c-9q8g-f849](https://github.com/advisories/GHSA-r28c-9q8g-f849)).
     - *Moderada:* XSS al escapar incorrectamente `</style>` en el formateo de CSS ([GHSA-qx2v-qp2m-jg93](https://github.com/advisories/GHSA-qx2v-qp2m-jg93)).
   - **Solución:** Actualizar a `postcss@^8.5.32`.

3. **`zod` (Severidad Alta)**
   - **Versión instalada:** `<3.25.76` / `<4.6.6`
   - **Vulnerabilidad:** Posible agotamiento de memoria / DoS al validar colecciones anidadas y sobredimensionadas ([GHSA-mrhx-c7xc-m3w5](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5)).
   - **Solución:** Actualizar a la versión parcheada más reciente de Zod compatible con el ecosistema de la aplicación.

4. **Ecosistema Genkit (`genkit`, `@genkit-ai/googleai`, `@genkit-ai/next`)**
   - **Versión instalada:** `1.6.2`
   - **Impacto:** Arrastra varias dependencias transitivas vulnerables (`uuid`, `@grpc/grpc-js`, `body-parser`, `protobufjs`).

### B. Dependencias Transitivas Críticas e Importantes

- **`proxy-addr` (Crítica):** Vulnerable a IP spoofing mediante subredes IPv4-mapped IPv6 ([GHSA-jqcg-44mw-7w3h](https://github.com/advisories/GHSA-jqcg-44mw-7w3h)).
- **`handlebars` (Crítica):** Ejecución remota de código / Prototype pollution en versiones desactualizadas.
- **`websocket-driver` (Crítica):** Bypass de límites de recursos y corrupción de mensajes en protocolos websocket ([GHSA-xv26-6w52-cph6](https://github.com/advisories/GHSA-xv26-6w52-cph6)).
- **`protobufjs` / `@grpc/grpc-js` (Alta):** Deserialización no segura y DoS en el SDK de Firebase / Genkit.

---

## 3. ¿Cómo Solucionar las Alertas de Dependabot?

Existen tres formas complementarias para resolver estas alertas:

### Opción 1: Solución Automática mediante GitHub Dependabot

1. **Configurar el archivo `.github/dependabot.yml`:**
   Crear el archivo de configuración para que GitHub revise automáticamente las dependencias de npm y abra Pull Requests:
   ```yaml
   version: 2
   updates:
     - package-ecosystem: "npm"
       directory: "/"
       schedule:
         interval: "weekly"
       open-pull-requests-limit: 10
   ```
2. **Revisar los Pull Requests de Dependabot:**
   - En la pestaña **Security > Dependabot alerts** de GitHub o en la lista de **Pull Requests**, Dependabot generará PRs individuales (por ejemplo: *"Bump next from 15.5.15 to 15.5.29"*).
   - Revisa que los tests de integración pasen y haz merge del PR.

### Opción 2: Solución Manual en el Proyecto Local

1. **Actualización automática de dependencias seguras sin breaking changes:**
   ```bash
   npm audit fix
   ```
   Esto actualizará las dependencias transitivas dentro del rango de versiones permitido por `package-lock.json`.

2. **Actualizar dependencias directas clave:**
   Actualizar Next.js y PostCSS directamente a versiones protegidas:
   ```bash
   npm install next@15.5.29 postcss@^8.5.32
   ```

3. **Uso de `overrides` en `package.json` para dependencias transitivas rebeldes:**
   Si una librería externa de terceros mantiene fija una versión insegura en su árbol de dependencias, puedes forzar a npm a usar una versión segura añadiendo la clave `overrides` en `package.json`:
   ```json
   "overrides": {
     "proxy-addr": "^2.0.7",
     "protobufjs": "^7.6.5",
     "tmp": "^0.2.6",
     "websocket-driver": "^0.7.5"
   }
   ```
   Luego ejecuta:
   ```bash
   npm install
   ```

### Opción 3: Validación y Pruebas Post-Actualización

Siempre que se actualicen dependencias es fundamental comprobar que la aplicación compile y no presente incompatibilidades:
```bash
# 1. Comprobar tipos de TypeScript
npm run typecheck

# 2. Comprobar reglas de linter
npm run lint

# 3. Compilar el proyecto para verificar que no haya problemas de build
npm run build
```
